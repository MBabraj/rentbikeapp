import { Injectable } from '@angular/core';
import { Bike } from './bike'

@Injectable()
export class OfferService {

  offer: Array<Object>;

  constructor() {
    this.offer = [
      new Bike(1, 'Giant Supreme', 'Comfortable bike.', 'https://www.edinburghbicycle.com/info/wp-content/uploads/2016/02/giant-trance-27-5-2-16-680x423.jpg', 7, 20),
      new Bike(2, 'Romet Blade', 'Holender bike', 'https://www.cyklotur.com/img/min/755/154/76154849_rower-art-deco-7-bialy-romet_1600x1074_TRS_pad.png', 10, 25),
      new Bike(3, 'Kona Sticky', 'Very good bike.', 'http://2014.konaworld.com/images/bikes/hires/mohala.jpg', 2, 18),
      new Bike(4, 'Specialized Pro', 'Popular choice.', 'https://static.evanscycles.com/production/bikes/hybrid-bikes/product-image/969-638/specialized-sirrus-sport-2016-hybrid-bike-silver-EV244807-7500-1.jpg', 20, 15),
      new Bike(5, 'Author One', 'Recomended bike.', 'http://archiv.author.eu/data/products/2016/42869201_author_bicycle_aura_55_disc_2016.jpg', 6, 22),
    ];
  }

  getFullOffer(): Array<Object>{
    return this.offer;
  }

}
