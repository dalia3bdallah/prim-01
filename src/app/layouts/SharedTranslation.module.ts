import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule} from '@ngx-translate/core';
import { AnimateOnScroll, AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,AnimateOnScrollModule ,AnimateOnScroll
  ],
  providers:[HttpClient],
  exports: [TranslateModule,AnimateOnScrollModule], 
})
export class SharedTranslationModule { 
    constructor( ) {}
    
}
