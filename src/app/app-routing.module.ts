import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from "@angular/core"
import { CalculatorComponent } from "./calculator/calculator.component"
import { EmployeeComponent } from "./employee/employee.component"
import { InterestCalculationComponent } from "./interest-calculation/interest-calculation.component"
import { PipeExampleComponent } from "./pipe-example/pipe-example.component"
import { UserComponent } from "./user/user.component"
import { NgModel } from "@angular/forms"
import { CustomaerComponent } from './customaer/customaer.component';

const routes: Routes=[
  {path:'calculator',component:CalculatorComponent},
  {path:'customer',component:CustomaerComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'interest_calculation',component:InterestCalculationComponent},
  {path:'pipe_example',component:PipeExampleComponent},
  {path:'user',component:UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
