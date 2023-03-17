import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="heading-error">Widget Error:</h5>
    <p class="message-error">{{ error?.message }}</p>
  `,
  styleUrls: ['./widget-error.component.scss'],
})
export class WidgetErrorComponent {
  @Input()
  error: Error | null = null;
}
