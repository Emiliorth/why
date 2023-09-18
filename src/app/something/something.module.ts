import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SomethingRoutingModule} from 'src/app/something/something-routing.module';
import {SomethingComponent} from 'src/app/something/something.component';

@NgModule({
    declarations: [
        SomethingComponent
    ],
    exports: [SomethingComponent],
    imports: [
        CommonModule,
        SomethingRoutingModule
    ]
})
export class SomethingModule {
}