import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtontestComponent } from './buttontest/buttontest.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyusergitComponent } from './myusergit/myusergit.component';
import { MatchService } from './services/match.service';

const routes: Routes = [
  {
    path:'calculate', component: CalculateComponent
  },
  {
    path:'my-table', component: MyTableComponent
  },
  {
    path:'buttontest', component: ButtontestComponent
  },
  {
    path:'myusergit', component: MyusergitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
