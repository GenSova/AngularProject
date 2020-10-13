import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  fav = "Add to favorites";
  Games;
  @Input() count: number;

  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  constructor() { }
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  ngOnInit(): void {
    this.Games = [
      { id: 1, name: 'Crysis' },
      { id: 2, name: 'Wolfenstein' },
      { id: 3, name: 'Far Cry' },
      { id: 4, name: 'Dark Souls' },
      { id: 5, name: 'Spider-Man' },
      { id: 6, name: 'Batman Begins' },
      { id: 7, name: 'Dark Souls II' },
      { id: 8, name: 'Dark Souls III' },
      { id: 9, name: 'Sekiro: SDT' },
      { id: 10, name: 'GTA V' },
    ];
  }

}
