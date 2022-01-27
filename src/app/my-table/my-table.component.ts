import { isNgTemplate } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit, OnDestroy {

  catchPeople = {name:'', age:0};

  constructor() { }
  
  people = [
    {name:'Enzo', age:23},
    {name:'Pino', age:75},
    {name:'Luca', age:41},
    {name:'Gino', age:25}
  ]

  addPeople(){
    this.people.push(this.catchPeople);
  }

  cancel = () =>{
    let length= this.people.length;
    //let index = this.people.findIndex(item => item.name);
    this.people.splice(length, 1);
  }
  
  deleteAll=()=>{
    this.people.splice(0, this.people.length);
  }
  
  //decommentare se si vuole salvare le modifiche, non sarà più visualizzato l'array PEOPLE
  ngOnInit(): void {
    //this.people = JSON.parse(localStorage.getItem('people') || ('[]'));
  }

  ngOnDestroy(): void {
    //localStorage.setItem('people', JSON.stringify(this.people));
  }

}
