import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ReviewsService } from '../../../client-views/reviews.service';

import { Carousel } from 'primeng/carousel';
import { IReview } from '../../../client-views/IReview';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-client-views',
  standalone: true,
  imports: [CarouselModule, Carousel, SharedTranslationModule],
  templateUrl: './client-views.component.html',
  styleUrl: './client-views.component.css',
  providers: [ReviewsService],
})
export class ClientViewsComponent {
  reviewsPro: IReview[] = [
    {
      id: 1,
      name: 'Bamboo Watch',
      pos: 'ABC Group CEO',
      content:
        'this tool Increased Conversions by 40% with Al Product Description',
      image: 'imgs/reviews/t5.png',
    },
    {
      id: 2,
      name: 'dalia atch',
      pos: 'ABC Group CEO',
      content:
        'Description this tool Increased Conversions by 40% with Al Product Description this tool Increased Conversions by 40% with Al Product Description',
      image: 'imgs/reviews/t2.png',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
