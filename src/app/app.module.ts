import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FirstFacade} from 'src/app/first.facade';
import {SecondFacade} from 'src/app/second.facade';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private firstFacade: FirstFacade,
        private secondFacade: SecondFacade
    ) {
    }
}
