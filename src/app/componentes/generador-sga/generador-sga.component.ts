import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeIn } from 'ng-animate';
import { Elemento } from 'src/app/interfaces/Elemento';
import { GeneradorSGAServiceService } from 'src/app/servicios/generador-sgaservice.service';


@Component({
  selector: 'app-generador-sga',
  templateUrl: './generador-sga.component.html',
  styleUrls: ['./generador-sga.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class GeneradorSGAComponent implements OnInit {

  public isLoading : boolean = true;
  public ready : boolean = true;

/*
  tagForm = new FormGroup({
    codigo: new FormControl('', Validators.required)
  });
*/



  //elementControl = new FormControl('', Validators.required);
  //selectFormControl = new FormControl('', Validators.required);

  public elements: Elemento[] = [];
  public fadeIn : any;
  tagForm = this.formBuilder.group({
    codigo: ['', Validators.required]
  })
  
  constructor(public generadorSGAService : GeneradorSGAServiceService, private formBuilder : FormBuilder, private _snackBar: MatSnackBar) {}


  ngOnInit(): void {

    this.generadorSGAService.getTags().subscribe(
      response => {
        console.log("Se realizo ok la obtención de elementos!")
        this.elements = response;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log("Error al obtener los elementos!")
        this._snackBar.open('Ocurrio un error al intentar recuperar los rótulos. Por favor inténtelo nuevamente. Si el error persiste comuniquese con yanialeban@gmail.com', 'cerrar', {
          duration: 25000,
          panelClass: ['snack-bar-error-style']
        });
      }
    )

  }

  public onSubmit(){
    console.log("submit!")
    let codigoPdf = this.tagForm.controls.codigo.value;
    console.log("Se intentara descargar el pdf con codigo: "+ codigoPdf);
    this.downloadFile(codigoPdf);
  }

  public downloadFile(fileCode: string) {
    this.ready = false;
    //calling service
    this.generadorSGAService.downloadFile(fileCode).subscribe(response => {
      console.log(response);
      var binaryData = [];
      binaryData.push(response.data);
      var url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}));
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = url;
      a.download = response.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();

      this._snackBar.open('Descarga exitosa', 'cerrar', {
        duration: 25000,
        panelClass: ['snack-bar-success-style']
      });

      this.ready = true;
    }, error => {
      this.ready = true;  
      this._snackBar.open('Ocurrio un error al intentar descargar el rótulo seleccionado. Por favor inténtelo nuevamente. Si el error persiste comuniquese con yanialeban@gmail.com', 'cerrar', {
        duration: 25000,
        panelClass: ['snack-bar-error-style']
      });
    })
    
}

}
