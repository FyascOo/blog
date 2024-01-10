import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-footer',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'bg-gray-700',
  },
  template: `
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <a href="https://github.com/FyascOo/blog" class="hover:underline text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Source code
        </a>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Copyright 2023-2024</span>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterUIComponent {}
