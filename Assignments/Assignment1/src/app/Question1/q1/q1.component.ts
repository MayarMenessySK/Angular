import { Component } from '@angular/core';

@Component({
  selector: 'app-q1',
  standalone: false,
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.scss'
})
export class Q1Component {
  username: string = ''; // Two-way bound property

  onSubmit() {
    alert(`Submitted username: ${this.username}`);
    this.username = ''; // Reset input field after submission

  }
}

