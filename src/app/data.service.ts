import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Game} from './models/game.model';
import {Category} from './models/category.model';
import {New} from './models/new.model';
import {Comment} from './models/comment.model';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gamesApi = 'http://localhost:3000/games/';
  commentsApi = 'http://localhost:3000/comments/';
  newsApi = 'http://localhost:3000/news/';
  categoriesApi = 'http://localhost:3000/categories/';
  gameInfoApi = 'http://localhost:3000/gameInfo/';

  constructor(private _http: HttpClient, private loggingService: LoggingService) { }

  getGames() {
    return this._http.get<Game[]>(this.gamesApi);
  }
  getComments() {
    return this._http.get<Comment[]>(this.commentsApi);
  }
  getNews() {
    return this._http.get<New[]>(this.newsApi);
  }
  getCategories() {
    return this._http.get<Category[]>(this.categoriesApi);
  }
  getGamesInfo(id): Observable<Game> {
    return this._http.get<Game>(this.gameInfoApi + id);
  }
}
