import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-price-packages',
  standalone: true,
  imports: [ButtonModule ,DividerModule,SharedTranslationModule],
  templateUrl: './price-packages.component.html',
  styleUrl: './price-packages.component.css'
})
export class PricePackagesComponent {

}
