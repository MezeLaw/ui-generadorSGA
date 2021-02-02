import { transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class HomeComponent implements OnInit {
  public fadeIn : any;
  public cardColSize=3;
  public textColSize=1;
  public isMobile : boolean = false;  
  public textHeight= "500px"; 

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result =>{
      this.isMobile= result.matches;
    if(this.isMobile){
      this.cardColSize=1;
      this.textColSize = 1;
      this.textHeight = "625px"; 
    } else{ 
        this.cardColSize=3
        this.textColSize = 1;
        this.textHeight="150px"; 
      }	
     });
   }

  ngOnInit(): void {
  }

}


 



