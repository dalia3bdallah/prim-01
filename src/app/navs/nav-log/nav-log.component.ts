import { Component, HostListener } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';
import { ButtonModule } from 'primeng/button';
import { TranslateService } from '@ngx-translate/core';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
    selector: 'prm-nav-log',
    imports: [
        SharedTranslationModule,
        ButtonModule,
        SearchModalComponent,
        RouterLink,
        RouterModule 
    ],
    templateUrl: './nav-log.component.html',
    styleUrl: './nav-log.component.css',
})
export class NavLogComponent  {
    isRegister:boolean=true;
  
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
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // ----------------
    logotext: string = 'DAL-19';
    logoimg: string = '';
    menuOpen: boolean = false;

    onclickbtnmobilemenu() {
        (document.querySelector('header') as HTMLElement).classList.toggle(
            'menuOpen'
        );
        // this.iconbars="pi pi-times";
        this.menuOpen = true;
    }

    constructor(private _translatServise: TranslateService) { }

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
