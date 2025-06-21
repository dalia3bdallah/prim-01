import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';


@Component({
  selector: 'prm-not-foundpage',
    standalone: true,
  imports: [ButtonModule ,RouterLink,SharedTranslationModule],
  // imports: [RouterOutlet,NavHomeComponent ,FooterComponent,],
  templateUrl: './not-foundpage.component.html',
  styleUrl: './not-foundpage.component.css',

})
export class NotFoundpageComponent {

}
