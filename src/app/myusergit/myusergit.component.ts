import { Component, OnInit } from '@angular/core';
import { GituserService } from '../services/gituser.service';
import { lastValueFrom } from 'rxjs';
import { RootObject } from '../services/gituser.service';

@Component({
  selector: 'app-myusergit',
  templateUrl: './myusergit.component.html',
  styleUrls: ['./myusergit.component.css']
})
export class MyusergitComponent implements OnInit {

  users:RootObject[] = [];

  visibility: boolean = false;

  constructor(private gituserServices: GituserService) { }

  async ngOnInit() {
    this.users = await lastValueFrom(this.gituserServices.getUsers());
    /*dato che non devo entrare in nessuna proprietà prendo direttamente il nuovo array vuoto
    e lo riempio con la funzione che mi prende gli user*/
  }

  getVisibility(){
    this.visibility = !this.visibility;
  }


}
