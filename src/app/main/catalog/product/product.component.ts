import { Component, OnInit } from '@angular/core';
import { ShowArrayService } from '../../../show-array.service';
import {ActivatedRoute} from '@angular/router';
import { Game } from '../../../models/game.model';
import {DataService} from '../../../data.service';
import {Comment} from '../../../models/comment.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ShowArrayService]
})
export class ProductComponent implements OnInit {
  games$: Game[];
  comments$: Comment[];

  id = this.route.snapshot.params['id'];
  gameInfo: any;

  now: string;
  today: number = Date.now();
  newName: string;
  newComment: string;
  Comments;
  Games;

  constructor(private showArrayService: ShowArrayService, private route: ActivatedRoute, private dataService: DataService) {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
    this.Games = showArrayService.getGamesArray();
    this.Comments = showArrayService.getCommentsArray();
  }

  ngOnInit() {
    this.dataService.getGames()
      .subscribe(data => this.games$ = data);
    this.dataService.getComments()
      .subscribe(data => this.comments$ = data);
    this.dataService.getGamesInfo(this.id)
      .subscribe(data => this.gameInfo = data);
    console.log(this.gameInfo);
  }
  addReview(newName, newComment) {
    this.comments$.unshift({name: newName, review: newComment});
    return false;
  }
}
