import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  utenti = [
    {nome:'Piero', citta:'Belgrado'},
    {nome:'Saro', citta:'Misterbianco'},
    {nome:'Lino', citta:'Pachino'},
    {nome:'Pedro', citta:'Calamosche'}
  ];


  getUser = (event: {nome:string, citta:string}) => {
    this.utenti.push(
      {nome: event.nome, citta: event.citta}
    );
  };

  getRemoveUser(event:any){
    this.utenti.splice(event, 1);
  }

  title = 'tutorial';
  
}

