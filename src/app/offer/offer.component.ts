import { Component, OnInit } from '@angular/core';
import { OfferService } from './../offer.service'

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OfferService]
})
export class OfferComponent implements OnInit {

  offer: Array<Object>;

  constructor(offerService: OfferService) {
    this.offer = offerService.getFullOffer()
  }

  ngOnInit() {
  }

}
