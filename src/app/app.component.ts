import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {delay, forkJoin, of, Subscription, switchMap, tap} from 'rxjs';
import {SecondFacade} from 'src/app/second.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'why';
    private subscriptions = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,
        private secondFacade: SecondFacade
    ) {
    }

    ngOnInit(): void {
        this.subscriptions.add(this.assignValuesFromParams());
    }

    private assignValuesFromParams() {
        return this.activatedRoute.params.pipe(
            switchMap((params) => {
                const requests = {
                    patient: of('Jan Nowak'),
                    visit: of('Wizyta u ortopedy'),
                    form: of('abc'),
                    params: of(params)
                };

                return forkJoin(requests);
            }),
            tap((data) => {
                debugger;
                this.secondFacade.updateThirdBS(data.form);
                console.log('assign finished');
            })
        ).subscribe();
    }
}