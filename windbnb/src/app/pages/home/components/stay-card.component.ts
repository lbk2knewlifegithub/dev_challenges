import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Stay } from '@lbk/shared';

@Component({
  selector: 'lbk-stay-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      class="rounded-lg  object-cover h-[200px] overflow-clip w-full"
      [src]="stay.photo"
      [alt]="stay.title"
    />
    <div class="mt-2">
      <div class="flex items-center justify-between">
        <!--        Is Super Host-->
        <div
          *ngIf="stay.superHost"
          class="px-2 py-1 font-bold border-2 border-black inline-block rounded-xl text-xs"
        >
          SUPER HOST
        </div>
        <!--        end Is Super Host-->

        <!--        Stay type-->
        <span class="text-xs text-stone-500">{{ stay.type }}</span>
        <!--        end Stay type-->

        <!--        Rating-->
        <lbk-rating [value]="stay.rating"></lbk-rating>
        <!--        end Rating-->
      </div>
      <h2 class="font-bold text-lg">{{ stay.title }}</h2>
    </div>
  `,
})
export class StayCardComponent implements OnInit {
  @Input() stay!: Stay;

  constructor() {}

  ngOnInit() {}
}
