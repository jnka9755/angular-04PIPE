import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {


  public numberA: number = 3600000.12312;
  public percent: number = 0.123456;

  constructor() { }

  ngOnInit(): void {
  }

}
