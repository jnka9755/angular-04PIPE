import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.css']
})
export class NotCommonsComponent implements OnInit {


  public name: string = 'Juan';
  public gender: string = 'M';

  public invitation = {
    'F': 'invitarla',
    'M': 'invitarlo'
  }


  public clients: string[] = ['Juan', 'Maria', 'Jose', 'Camilo', 'Andrea']
  public clientsMap = {
    '=0' : 'Actualmente no tenemos ningún cliente esperando',
    '=1' : 'Actualmente tenemos 1 cliente esperando',
    '=2' : 'Actualmente tenemos 2 clientes esperando',
    'other': 'Actualmente tenemos # clientes esperando'
  }

  public person = {
    name: 'Juan',
    age: 25,
    address: 'Mosquera, Colombia'
  }

  public myObservable = interval(1000);
  public valuePromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve ('Tenemos data de promesa');
    }, 3500) 
  });

  constructor() { }

  ngOnInit(): void {
  }

  editPerson() {

    this.name = 'Andrea';
    this.gender = 'F';
  }

  deleteClient() {
    this.clients.splice(0,1);
  }
}
