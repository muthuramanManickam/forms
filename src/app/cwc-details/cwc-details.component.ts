import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cwc  } from '../interface';
import { products } from "../cwc";
@Component({
  selector: 'app-cwc-details',
  templateUrl: './cwc-details.component.html',
  styleUrls: ['./cwc-details.component.scss']
})
export class CwcDetailsComponent {
  cwcs: Cwc | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const routeParams =  this.route.snapshot.paramMap;
    const cwcIdRoute = Number(routeParams.get('cwcId'))

    this.cwcs = products.find((cwc: { id: number; }) => cwc.id === cwcIdRoute)
  }
  
}


