import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent implements OnInit {
  
  @Input() users!: {nome:string, citta:string}[];
  @Output() user = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }
  removeUser(user:any){
    this.user.emit(user);
  }
}
