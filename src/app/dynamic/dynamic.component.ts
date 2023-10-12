import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit{
  product: any;
  

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state,'sddsdsdsd');
}
  ngOnInit(): void {
    this.product = history.state;
    console.log( history, this.product,'prodiuct');
    console.log(history.state.data,'dadada');
    
  }

}
