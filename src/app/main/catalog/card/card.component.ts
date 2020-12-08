import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { ShowArrayService } from '../../../show-array.service';
import {Game} from '../../../models/game.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ShowArrayService]
})
export class CardComponent implements OnChanges {
  gamecard$: Game[];
  Games;
  fav = "Add to favorites";
  rmfav = "Remove from fav"
  clicked = [];
  a = 0;
  @Input() count: number;

  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private showArrayService: ShowArrayService, private dataService: DataService) {
  this.Games = showArrayService.getGamesArray();
  }

  increment(i: number): void {
    if (i in this.clicked){
      this.count--;
      this.countChanged.emit(this.count);
      this.clicked.splice(i, 1);
      this.a = 0;
      alert("Removed from favorites");
    }
    else {
      this.count++;
      this.countChanged.emit(this.count);
      this.clicked.push(i);
      this.a = i + 1;
    }
  }
  /*
  Games = [
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
  ];*/
  ngOnInit() {
    return this.dataService.getGames()
      .subscribe(data => this.gamecard$ = data);
  }
  ngOnChanges(changes: SimpleChanges){
    if (this.count != 0) {
      alert("Added to favorites");
    }
  }
}
