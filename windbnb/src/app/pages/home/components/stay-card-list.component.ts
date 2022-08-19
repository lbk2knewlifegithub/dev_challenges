import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Stay } from 'src/app/shared';

@Component({
  selector: 'lbk-stay-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="grid gap-6 grid-cols-3">
      <li *ngFor="let stay of stays">
        <lbk-stay-card [stay]="stay"></lbk-stay-card>
      </li>
    </ul>
  `,
})
export class StayCardListComponent implements OnInit {
  @Input() stays!: Stay[];

  constructor() {}

  ngOnInit() {}
}
