import { Component, OnInit } from '@angular/core';
// // import { Cwc } from "../interface";
import { products } from "../cwc";
import { Cwc } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cwc',
  templateUrl: './cwc.component.html',
  styleUrls: ['./cwc.component.scss']
})
export class CwcComponent  implements  OnInit{
  // items : any[]=[
  //   {
  //     id: 1,
  //     name: 'India',
  //     cup:10
  //   },
  //   {
  //     id: 2,
  //     name: 'Australia',
  //     cup:5
  //   },
  // ];
  selectedCountry: string = '';
  items: any[] = []; // This array will store the loaded data

  // Define a method to load India data

  constructor(public router:Router) { }
  ngOnInit(): void {
   
  } 
  loadIndiaData() {
    this.selectedCountry = 'India';
    this.items = [
      { id: 1, name: 'India Item 1' },
      { id: 2, name: 'India Item 2' },
      // Add more India items as needed
    ];
  }

  // Define a method to load Australia data
  loadAustraliaData() {
    this.selectedCountry = 'Australia';
    this.items = [
      { id: 1, name: 'Australia Item 1' },
      { id: 2, name: 'Australia Item 2' },
      // Add more Australia items as needed
    ];
  }

  addTeam(proc:Cwc){
    this.items.push(proc);
  }

  getTeams(){
    return this.items;
    
  }

  temaIndia(){
   
  }

}

