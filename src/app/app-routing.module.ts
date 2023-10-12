import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CwcComponent } from './cwc/cwc.component';
import { CwcDetailsComponent } from './cwc-details/cwc-details.component';
import { FormComponent } from './forms/form/form.component';
import { ParchiComponent } from './parchi/parchi.component';
import { HomeComponent } from './home/home.component';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
    {
      path:'',
      component: CwcDetailsComponent
    },
    {
      path:'cwcc', 
      component: CwcComponent,
      children:[
        {
          path: 'cwcc/:cwccId',
          component : CwcComponent
        }
      ]
    },
    {
      path:'cwc',
      component: CwcDetailsComponent
    },
    {
      path:'form',
      component: FormComponent
    },
    {
      path:'parchi',
      component :ParchiComponent,
      data :{ id:'1', name:"parchi........."}
    },
    { path: 'home', component: HomeComponent },
  { path: 'static', component: StaticComponent, data :{ id:'1', name:"Angular"}},
  { path: 'dynamic', component: DynamicComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
