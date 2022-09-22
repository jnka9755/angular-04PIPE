import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css']
})
export class CommonsComponent implements OnInit {


  public nameUC: string = 'juan';
  public nameLC: string = 'JUAN';
  public nameTC: string = 'JuAn CaMiLo';

  public date: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
