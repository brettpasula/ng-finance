import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent {
  name = new FormControl('');
}
