import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CwcComponent } from './cwc/cwc.component';
import { CwcDetailsComponent } from './cwc-details/cwc-details.component';
import { FormComponent } from './forms/form/form.component';

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
    }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
