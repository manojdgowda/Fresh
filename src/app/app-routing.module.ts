import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChildComponent } from './app-child/app-child.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'app-parent',component:AppParentComponent},
  {path:'app-child',component:AppChildComponent},
  {path:'',component:AppParentComponent},
  {path:'form',component:FormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const route=[AppParentComponent,AppChildComponent,FormComponent]
