import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
  
})


export class CalculateComponent implements OnInit, OnDestroy {

  side = 0;
  x:string = '';
  facts:string[] = [];

  constructor(private matchService: MatchService) { }

  random() {
    return Math.random();
 }

  getArea = () => this.side * this.side;
  getPerimeter = () => this.side * 4;
  increments = () => this.side = this.side +2;

  ngOnDestroy():void {
    console.log('sono dentro onDestroy Calculate');
  }

  async ngOnInit() {
    console.log('sono dentro onInit Calculate');
    const {data} = await lastValueFrom(this.matchService.getMatches());//{data} prende la proprietà data dell'array RootObject
    console.log('obj: ', data);
    this.facts = data.map(item => item.fact);//qui prendo solo i fatti di data e li mappo in facts
  }  
 
}
