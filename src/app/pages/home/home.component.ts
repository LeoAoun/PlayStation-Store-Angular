import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showCard: boolean = false;
  selectedGameDetails: any = {};
  style: object = {};

  constructor() {}

  ngOnInit(): void {}

  showGameDetails(gameDetails: object) {
    this.showCard = true;
    this.selectedGameDetails = gameDetails;
    this.style = { 'z-index': 2 };
  }

  Hide() {
    this.showCard = false;
    this.style = { 'z-index': 0 };
  }
}
