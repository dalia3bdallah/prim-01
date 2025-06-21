import { Component } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';

import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'prm-search-modal',
    standalone: true,
  imports: [
    SharedTranslationModule,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css',
})
export class SearchModalComponent {
  onClickHandlerremove(): void {
    let srch = document.querySelector('.search-window') as HTMLElement;
    srch.classList.remove('showsrch');
  }
}
