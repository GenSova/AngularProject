import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Categories;

  constructor() {
  }

  ngOnInit(): void {
    this.Categories = [
      { id: 1, name: 'Platformer' },
      { id: 2, name: 'Shooter' },
      { id: 3, name: 'Fighting' },
      { id: 4, name: 'Stealth' },
      { id: 5, name: 'Strategy' },
      { id: 6, name: 'Sports' },
      { id: 7, name: 'Survival' },
      { id: 8, name: 'Rhythm' },
      { id: 9, name: 'Survival horror' },
      { id: 10, name: 'Text adventures' },
      { id: 11, name: 'MMORPG' },
      { id: 12, name: 'Action RPG' },
      { id: 13, name: 'Wargame' },
      { id: 14, name: 'Racing' },
    ];
  }
}
