import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items: Array<any> = [];
  constructor() { 
    this.items=[
   {name: 'assets/images/1.png'},
   {name: 'assets/images/2.png'},
   {name: 'assets/images/3.png'},
   {name: 'assets/images/4.png'},
    ];
  }

  ngOnInit() {
  }

}
