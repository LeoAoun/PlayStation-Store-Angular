import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail-pricing',
  templateUrl: './card-detail-pricing.component.html',
  styleUrls: ['./card-detail-pricing.component.css'],
})
export class CardDetailPricingComponent implements OnInit {
  @Input() gameDetailType: string = '';
  @Input() gameDetailPrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
