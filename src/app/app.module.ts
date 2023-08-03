import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomaerComponent } from './customaer/customaer.component';
import { UserComponent } from './user/user.component';
import { InterestCalculationComponent } from './interest-calculation/interest-calculation.component';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream
=======
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SqrtPrgPipe } from './pipe-example/pipe/sqrt-prg.pipe';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CustomaerComponent,
    UserComponent,
<<<<<<< Updated upstream
    InterestCalculationComponent
=======
    InterestCalculationComponent,
    PipeExampleComponent,
    SqrtPrgPipe
>>>>>>> Stashed changes
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
