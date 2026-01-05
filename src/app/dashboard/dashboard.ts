import { Component } from '@angular/core';
import { CommentsInput } from '@ui/comments-input/comments-input';

@Component({
  selector: 'app-dashboard',
  imports: [CommentsInput],
  templateUrl: './dashboard.html',
})
export class Dashboard {}
