import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {

  constructor() { }

  public value: boolean = false;
  public sortBy: string = '';
  public heroes: Heroe[] = [
    {
    name: 'Superman',
    fly: true,
    color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      fly: false,
      color: Color.red
    },
    {
      name: 'Hulk',
      fly: false,
      color: Color.green
    },
    {
      name: 'Iron Man',
      fly: true,
      color: Color.red
    },
  ];

  ngOnInit(): void {
  }

  editPipe() {
    this.value = !this.value
  }

  chageSort(value: string) {
    this.sortBy = value;
  }
}
