import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { AccordionModule } from 'primeng/accordion';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';


@Component({
  selector: 'prm-faq',
  standalone: true,
  imports: [TabsModule, CommonModule, AccordionModule,SharedTranslationModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
