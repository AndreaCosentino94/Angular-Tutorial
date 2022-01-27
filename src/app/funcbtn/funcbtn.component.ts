import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtontestComponent } from '../buttontest/buttontest.component';

@Component({
  selector: 'app-funcbtn',
  templateUrl: './funcbtn.component.html',
  styleUrls: ['./funcbtn.component.css']
})
export class FuncbtnComponent implements OnInit {

  @Input() verifybtn!: {name:string, verifybool:boolean};

  constructor() { }

  myFunc(){
    this.verifybtn.verifybool = !this.verifybtn.verifybool;
  }

  ngOnInit(): void {
  }

}
