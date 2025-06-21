import { Component, OnInit } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';

import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { FeaturesComponent } from '../home/features/features.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'prm-benfits',
    standalone: true,
    imports: [
        SharedTranslationModule,
        Breadcrumb,
        FeaturesComponent,
        TranslateModule
    ],
    templateUrl: './benfits.component.html',
    styleUrl: './benfits.component.css',
})
export class BenfitsComponent implements OnInit {

    constructor(private _translateService:TranslateService, private cd: ChangeDetectorRef) { }

    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this._translateService.get('benfits').subscribe((translatedLabel) => {this.items = [
            { label: translatedLabel }
        ];    
          this.cd.detectChanges(); // Force update if needed
        });

        this.home = { icon: 'pi pi-home', routerLink: '/home' };
    }
}
