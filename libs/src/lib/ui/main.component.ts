/* eslint-disable @angular-eslint/no-host-metadata-property */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-main',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  host: {
    class: 'flex justify-center items-center bg-gray-800 flex-1 text-white',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainUIComponent {}
