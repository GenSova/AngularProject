import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  now: string;
  today: number = Date.now();
  newName: string;
  newComment: string;
  comments = [
    {name: 'Testing Name', review: 'Testing comment'}
  ];
  Games = [
    {id: 1, name: 'Crysis'},
    {id: 2, name: 'Wolfenstein'},
    {id: 3, name: 'Far Cry'},
    {id: 4, name: 'Dark Souls'},
    {id: 5, name: 'Spider-Man'},
    {id: 6, name: 'Batman Begins'},
    {id: 7, name: 'Dark Souls II'},
    {id: 8, name: 'Dark Souls III'},
    {id: 9, name: 'Read Dead Redemption II'},
    {id: 10, name: 'GTA V'},
  ];

  constructor() {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }

  ngOnInit(): void {
  }
  addReview(newName, newComment) {
    this.comments.unshift({name: newName, review: newComment});
    return false;
  }

}
