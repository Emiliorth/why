import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SomethingComponent} from 'src/app/something/something.component';

const routes: Routes = [
    {path: '', component: SomethingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SomethingRoutingModule {
}
