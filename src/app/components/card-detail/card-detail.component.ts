import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  @Input() gameDetailCover: string = '';
  @Input() gameDetailLabel: string = '';
  @Input() gameDetailType: string = '';
  @Input() gameDetailPrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
