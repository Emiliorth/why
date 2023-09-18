import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SecondFacade {
    public thirdBS$: Observable<string>;
    public fourthBS$: Observable<string>;
    private _thirdBS$ = new BehaviorSubject<string>('');
    private _fourthBS$ = new BehaviorSubject<string>('');

    constructor() {
        this.thirdBS$ = this._thirdBS$.asObservable();
        this.fourthBS$ = this._fourthBS$.asObservable();
    }

    public updateThirdBS(value: string) {
        this._thirdBS$.next(value);
    }
}
