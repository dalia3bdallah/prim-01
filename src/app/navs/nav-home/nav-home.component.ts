import { Component, OnInit, HostListener } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header, MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';

import { FormsModule } from '@angular/forms';


@Component({
    selector: 'prm-nav-home',
    imports: [
        RouterLink,
        RouterLinkActive,
        ButtonModule,
        ToastModule,
        TranslateModule,
        SearchModalComponent,
        FormsModule,
        
    ],
    templateUrl: './nav-home.component.html',
    styleUrl: './nav-home.component.css',
    providers: [MessageService, HttpClient],
})
export class NavHomeComponent implements OnInit {

    // ------------------------------------------------
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const header = document.querySelector('header');
        if (!header) return;

        const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (scrollTop > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // ----------------


    ngOnInit() {
     
    }

    logotext: string = 'prim-01';
    logoimg: string = '';
    menuOpen: boolean = false;
    // home:string="";

    onscreenwidthchange() {
        if (screen.pixelDepth < 991) {
            (document.querySelector('header') as HTMLElement).classList.add(
                'mobile-menu'
            );
        }
    }
    onclickbtnmobilemenu() {
        (document.querySelector('header') as HTMLElement).classList.toggle(
            'menuOpen'
        );
        // this.iconbars="pi pi-times";
        this.menuOpen = true;
    }



    constructor( private _translatServise: TranslateService ) {}

    changeLang(lang: any = 'en') {
        const selectedLang = lang.target.value;
        // let valLang = document.getElementById('sl') as HTMLElement;
        let appBody = document.querySelector('body') as HTMLElement;
        // alert(selectedLang);
        this._translatServise.use(selectedLang);
        localStorage.setItem('lang', selectedLang);
        // valLang.innerHTML = selectedLang;
        if (selectedLang == 'ar') {
            appBody.classList.add('rtl');
        } else {
            appBody.classList.remove('rtl');
        }
    }

    onClickHandler(): void {
        let srch = document.querySelector('.search-window') as HTMLElement;
        srch.classList.add('showsrch');
    }
}
