import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail-label',
  templateUrl: './card-detail-label.component.html',
  styleUrls: ['./card-detail-label.component.css'],
})
export class CardDetailLabelComponent implements OnInit {
  @Input()
  gameDetailLabel: string = '';

  constructor() {}

  ngOnInit(): void {}
}
