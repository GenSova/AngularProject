import {Component, OnInit, Input, Directive, SimpleChanges } from '@angular/core';
import { ShowArrayService } from '../show-array.service';
import {Game} from '../models/game.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ShowArrayService]
})
export class NavbarComponent implements OnInit{
  games$: Game[];
  Games;
  a = 0;
  searchText;

  constructor(private showArrayService: ShowArrayService, private dataService: DataService) {
    this.Games = showArrayService.getGamesArray();
  }
  ngOnInit() {
    this.dataService.getGames()
      .subscribe(data => this.games$ = data);
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
    { id: 9, name: 'Read Dead Redemption II' },
    { id: 10, name: 'GTA V' },
  ];*/
  /*
  counter = '';
  a = false;
  login() {
    this.counter = "You're welcome";
  }
  logout() {
    this.counter = "You're logged out";
  }
  destroyer() {
    this.a = true;
  }
  destroyed() {
    this.a = false;
    this.counter = 'Recovered';
  }*/
}
/*
@Directive({
  selector: '[directiveListen]',
})
export class DirectiveListen {
  @Input () directiveListen;
  ngOnChanges(chg) {
    alert(chg.directiveListen.currentValue);
  }
  ngOnDestroy(){
    alert("Destroyed");
  }
}
*/
