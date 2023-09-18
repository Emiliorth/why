import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subscription, tap} from 'rxjs';
import {SecondFacade} from 'src/app/second.facade';

@Injectable({
    providedIn: 'root'
})
export class FirstFacade {
    public firstBS$: Observable<string>;
    public secondBS$: Observable<string>;
    public thirdBS$: Observable<string>;
    private _firstBS$ = new BehaviorSubject<string>('');
    private _secondBS$ = new BehaviorSubject<string>('');
    private subscription = new Subscription();

    constructor(
        private secondFacade: SecondFacade
    ) {
        this.firstBS$ = this._firstBS$.asObservable();
        this.secondBS$ = this._secondBS$.asObservable();
        this.thirdBS$ = this.secondFacade.thirdBS$;
        this.subscription.add(this.firstCL());
    }

    private firstCL() {
        return combineLatest([this.firstBS$, this.thirdBS$]).pipe(
            tap(([first, third]) => {
                debugger;
                console.log('first', first);
                console.log('third', third);
            })
        ).subscribe();
    }
}
