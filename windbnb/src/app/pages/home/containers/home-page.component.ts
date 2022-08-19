import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stay } from '@lbk/shared';
import { StaysFacade } from '@lbk/state/facade';

@Component({
  selector: 'lbk-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="container flex items-center justify-between">
      <h1 class="font-bold text-2xl">Stays in Findland</h1>
      <span>12+ stays</span>
    </nav>
    <main class="container mt-6">
      <lbk-stay-card-list [stays]="(stays$ | async)!"></lbk-stay-card-list>
    </main>
  `,
})
export class HomePageComponent implements OnInit {
  stays$!: Observable<Stay[]>;

  constructor(private readonly _ss: StaysFacade) {}

  ngOnInit() {
    this.stays$ = this._ss.stays$;
  }
}
