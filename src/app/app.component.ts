import {Component} from '@angular/core';
import {FirstFacade} from 'src/app/first.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'why';

    constructor(private firstFacade: FirstFacade) {
    }
}