import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class=" border-gray-200 bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a [routerLink]="['/']" class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Chouf'academy
        </a>
        <div class="font-medium flex p-0 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 ">
          <a [routerLink]="['/tips']" class="block py-2 px-3 border-0 p-0 rounded hover:bg-gray-700 text-white">Tips</a>
          <a [routerLink]="['/posts']" class="block py-2 px-3 border-0 p-0 rounded hover:bg-gray-700 text-white">
            Posts
          </a>
          <a [routerLink]="['/portfolio']" class="block py-2 px-3 border-0 p-0 rounded hover:bg-gray-700 text-white">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      a {
        text-decoration: none;
      }
    `,
  ],
})
export class HeaderUIComponent {}
