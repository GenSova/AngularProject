import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';
import {Game} from '../../../models/game.model';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit {
  gamecard$: Game[];
  fav = "Add to favorites";
  title = 'Component Interaction';
  Counter = 0;
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getGames()
      .subscribe(data => this.gamecard$ = data);
  }

}
