import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface Slug {
  lien: string;
  title: string;
}

@Component({
  selector: 'ui-side-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <aside class="border border-t-gray-800  border-b-gray-800 border-l-gray-800  border-r-red h-full mr-3" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        @for (slug of slugs; track $index) {
        <a
          [routerLink]="[slug.lien]"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span class="ms-3">{{ slug.title }}</span>
        </a>
        }
      </div>
    </aside>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavUIComponent {
  @Input({ required: true }) slugs: Slug[] = [];
}
