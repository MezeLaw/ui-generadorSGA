import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-usefull-links',
  templateUrl: './usefull-links.component.html',
  styleUrls: ['./usefull-links.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class UsefullLinksComponent implements OnInit {

  public fadeIn : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
