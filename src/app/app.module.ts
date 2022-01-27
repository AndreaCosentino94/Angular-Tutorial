import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MyTableComponent } from './my-table/my-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtontestComponent } from './buttontest/buttontest.component';
import { FuncbtnComponent } from './funcbtn/funcbtn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyusergitComponent } from './myusergit/myusergit.component';
import { FormComponent } from './form/form.component';
import { FormtableComponent } from './formtable/formtable.component';
import { LimitstringPipe } from './pipes/limitstring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    MyTableComponent,
    ButtontestComponent,
    FuncbtnComponent,
    NavbarComponent,
    MyusergitComponent,
    FormComponent,
    FormtableComponent,
    LimitstringPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
