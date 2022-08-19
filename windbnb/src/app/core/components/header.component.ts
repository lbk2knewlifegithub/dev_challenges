import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav class="container py-8 flex justify-between">
        <img src="assets/logo.svg" alt="Logo" />

        <div class="flex gap-4 p-6 rounded-xl shadow-md items-center">
          <span>Helsiki, Findland</span>
          <input class="max-w-[80px]" placeholder="Add guests" type="text" />
          <i class="fa fa-search text-red-500"></i>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
