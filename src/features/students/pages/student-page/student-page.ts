import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-page',
  imports: [RouterLink],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPage {
  readonly students = signal([
    { id: 1, name: 'Domenica' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Juan' },
    { id: 4, name: 'Pepe' },
    { id: 5, name: 'Juan' },
  ]);
}
