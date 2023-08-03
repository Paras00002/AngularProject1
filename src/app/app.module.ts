import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomaerComponent } from './customaer/customaer.component';
import { UserComponent } from './user/user.component';
import { InterestCalculationComponent } from './interest-calculation/interest-calculation.component';
import { FormsModule } from '@angular/forms';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SqrtPrgPipe } from './pipe-example/pipe/sqrt-prg.pipe';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CustomaerComponent,
    UserComponent,
    InterestCalculationComponent,
    PipeExampleComponent,
    SqrtPrgPipe,
    EmployeeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
