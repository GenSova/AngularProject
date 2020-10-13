import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  title = 'Component Interaction';
  Counter = 0;
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
