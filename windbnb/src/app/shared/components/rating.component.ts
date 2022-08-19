import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lbk-rating',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <i class="fa fa-star text-red-500"></i>
    {{ value }}
  `,
  styles: [
    `
      :host {
        @apply flex items-center gap-1 text-xs font-semibold;
      }
    `,
  ],
})
export class RatingComponent {
  @Input() value!: number;
}
