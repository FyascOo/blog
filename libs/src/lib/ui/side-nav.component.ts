import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-side-nav',
  standalone: true,
  imports: [CommonModule],
  template: `<p>side-nav works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavUIComponent {}
