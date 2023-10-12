import { state } from '@angular/animations';
import { Component , Input, OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-parchi',
  templateUrl: './parchi.component.html',
  styleUrls: ['./parchi.component.scss']
})
export class ParchiComponent implements OnInit{
  @Input() item = '';
  protect : any;
  items:any | undefined;
  constructor(private activatedroute : ActivatedRoute ,private router : Router){}

  ngOnInit(){
    this.activatedroute.data.subscribe(data => {
      this.protect = data;
      console.log(this.protect);
      {{this.protect}}
    })
  }
 
}
