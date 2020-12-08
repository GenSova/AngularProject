import { Component, OnInit } from '@angular/core';
import { ShowArrayService} from '../../../show-array.service';
import {Game} from '../../../models/game.model';
import {Category} from '../../../models/category.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  providers: [ShowArrayService]
})
export class CategoriesListComponent implements OnInit {
  categories$: Category[];
  Categories;

  constructor(private showArrayService: ShowArrayService, private dataService: DataService) {
    this.Categories = showArrayService.getCategoriesArray();
  }

  ngOnInit(): void {
    this.dataService.getCategories()
      .subscribe(data => this.categories$ = data);
  }

}
