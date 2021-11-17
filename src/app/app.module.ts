import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@mozaic-ds/mozaic-web-components/public/bundle.js';
import Accordion from '@mozaic-ds/mozaic-web-components/public/components/accordion/accordion.js';

import { AppComponent } from './app.component';

if (!customElements.get('m-accordion')) {
  customElements.define('m-accordion', Accordion);  
}


@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
