import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
