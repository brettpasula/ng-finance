import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent {
  @Input() headerText: string = '';
}
