import { Component, OnInit } from '@angular/core';
import { ShowArrayService } from '../../../show-array.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResolverService} from '../../../guards/resolver.service';
import {DataService} from '../../../data.service';
import {New} from '../../../models/new.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
  providers: [ShowArrayService]
})
export class NewsCardComponent implements OnInit {
  a = 0;
  News;
  newsCard$: New[];

 // constructor(private usersS: ShowArrayService, private activateRoute: ActivatedRoute) {
 // }
  /*
  constructor(private _route: ActivatedRoute,
              private resolverservice: ResolverService,
              private _router: Router) {
    this.News = this._route.snapshot.data['resolvedList'];
  }*/
  constructor(private showArrayService: ShowArrayService, private dataService: DataService) {
    this.News = showArrayService.getNewsArray();
  }
  ngOnInit() {
    return this.dataService.getNews()
      .subscribe(data => this.newsCard$ = data);
  }

  /*
    ngOnInit(): void {
      this.News = this.activateRoute.snapshot.data['data'];
    }*/
}
