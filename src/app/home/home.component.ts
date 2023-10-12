import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public product:any = {}

  constructor(private router : Router) {
  }

  gotoDynamic() {
    this.router.navigateByUrl('/dynamic',{state:this.product})
    console.log({state:this.product},'sssss');
    
  }

}
