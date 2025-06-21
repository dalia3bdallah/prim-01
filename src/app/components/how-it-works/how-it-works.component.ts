import { Component, OnInit } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';
import { Feature1Component } from '../../blocks-components/feature1/feature1.component';
import { ServicesComponent } from '../home/services/services.component';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { TranslateService } from '@ngx-translate/core';

import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'prm-how-it-works',
  standalone: true,
  imports: [
    SharedTranslationModule,
    Feature1Component,
    ServicesComponent,
    Breadcrumb,
    TranslateModule,
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent implements OnInit {
  constructor(private _translateService: TranslateService, private cd: ChangeDetectorRef) {}

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;


  ngOnInit() {
    this._translateService.get('how it works').subscribe((translatedLabel) => {
      this.items = [{ label: translatedLabel }];
      this.cd.detectChanges(); // Force update if needed
    });
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
