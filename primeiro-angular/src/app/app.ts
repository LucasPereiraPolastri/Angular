import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWord } from './hello-word/hello-word';
import { OlaTurma } from './ola-turma/ola-turma';

@Component({
  imports: [RouterOutlet, HelloWord, OlaTurma],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primeiro-angular');
}
