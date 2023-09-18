import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {delay, forkJoin, of, Subscription, switchMap, tap} from 'rxjs';
import {SecondFacade} from 'src/app/second.facade';

@Component({
    selector: 'app-something',
    templateUrl: './something.component.html'
})
export class SomethingComponent implements OnInit {
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
                    form: of('abc').pipe(delay(500)),
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