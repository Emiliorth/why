import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, combineLatest, debounceTime, filter, Observable, Subscription, tap} from 'rxjs';
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
        private readonly router: Router,
        private secondFacade: SecondFacade
    ) {
        this.firstBS$ = this._firstBS$.asObservable();
        this.secondBS$ = this._secondBS$.asObservable();
        this.thirdBS$ = this.secondFacade.thirdBS$;
        this.subscription.add(this.firstCL());
    }

    private firstCL() {
        return combineLatest([this.router.events, this.thirdBS$]).pipe(
            filter(([e]) => e instanceof NavigationEnd),
            tap(([first, third]) => {
                debugger;
                console.log('first', first);
                console.log('third', third);
            })
        ).subscribe();
    }
}
