import { Component, input } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
})
export class Profile {
  user = input<User>();
}
