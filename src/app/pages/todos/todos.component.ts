import { IndicatorsService } from './../../services/indicators.service';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../interfaces/ITodo';
import { positiveType } from '../../enums/positiveType';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos = inject(TodoService).todos;
  indicatorsService = inject(IndicatorsService);

  public isPositive(todo: ITodo): boolean {
    return todo.positiveType === positiveType.positive;
  }
}
