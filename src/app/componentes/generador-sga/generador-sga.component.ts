import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(public generadorSGAService : GeneradorSGAServiceService, private formBuilder : FormBuilder) {}


  ngOnInit(): void {

    this.generadorSGAService.getTags().subscribe(
      response => {
        console.log("Se realizo ok la obtención de elementos!")
        this.elements = response;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log("Error al obtener los elementos!")
      }
    )

  }

  public onSubmit(){
    console.log("submit!")
    console.log(this.tagForm.controls.codigo.value)
  }

}
