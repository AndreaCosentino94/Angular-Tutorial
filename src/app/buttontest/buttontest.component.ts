import { Component, OnInit, Output } from '@angular/core';
import { reduce } from 'rxjs-compat/operator/reduce';
import { FuncbtnComponent } from '../funcbtn/funcbtn.component';

@Component({
  selector: 'app-buttontest',
  templateUrl: './buttontest.component.html',
  styleUrls: ['./buttontest.component.css']
})

export class ButtontestComponent implements OnInit {
  
  verifybtn=[
    {name:'Sergione', verifybool: false},
    {name:'Giorgione', verifybool: false},
    {name:'Pierone', verifybool: false}
  ]

  
  
  //color : 'green' | 'red' = 'red';
  fontSize = 24;
  myBool = true; 

  constructor() { }

  myFunc = () => {
    this.verifybtn.find(item => item.verifybool = !item.verifybool);
  }
  myFuncII = () => {
    this.myBool = !this.myBool;
  }
  incFont =() =>{
    this.fontSize++;
  }
  decFont = () =>{
    this.fontSize--;
  }
  
  ngOnInit(): void {
  }

}
