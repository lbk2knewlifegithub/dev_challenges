import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, first, Observable } from 'rxjs';
import { StaysFacade } from '@lbk/state/facade';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-header></lbk-header>
    <router-outlet *ngIf="isLoaded$ | async"></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  isLoaded$!: Observable<boolean>;

  constructor(private readonly _ss: StaysFacade) {}

  ngOnInit(): void {
    this._ss.loadStays();

    this.isLoaded$ = this._ss.isTryLoaded;
    this._ss.isTryLoaded.subscribe(console.log);
    this.isLoaded$
      .pipe(
        filter((isTryLoggedIn) => isTryLoggedIn),
        first()
      )
      .subscribe(() => {
        this.closeSplashScreen();
      });
  }

  private closeSplashScreen() {
    const splashScreen = document.getElementById(
      'splash-screen'
    ) as HTMLElement;
    splashScreen.remove();
  }
}
