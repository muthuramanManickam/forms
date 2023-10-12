import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit{
  product:any;
  constructor(private activatedroute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedroute.data.subscribe(e => {
      this.product = e;
      console.log('e',e);
      
    })
  }


}
