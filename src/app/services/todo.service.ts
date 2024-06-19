import { positiveType } from './../enums/positiveType';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import { difficultType } from '../enums/difficultType';
import { resetType } from '../enums/resetType';

const tods: ITodo[] = [
  {
    id: 1,
    title: 'first',
    description: 'need to do',
    positiveType: positiveType.positive,
    difficultType: difficultType.medium,
    resetType: resetType.daily
  },
  {
    id: 2,
    title: 'second',
    description: 'typescript',
    positiveType: positiveType.negative,
    difficultType: difficultType.trivial,
    resetType: resetType.monthly
  },
  {
    id: 3,
    title: 'third',
    description: 'asd',
    positiveType: positiveType.positive,
    difficultType: difficultType.hard,
    resetType: resetType.weekly
  },
]



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ITodo[] = tods;

  constructor() { }


  create(title: string, description: string, positiveType: positiveType, difficultType: difficultType, resetType: resetType) {
    const newTodo: ITodo = {
      id: this.todos.length + 1,
      title,
      description,
      positiveType,
      difficultType,
      resetType
    }

    this.todos.push(newTodo);
  }

  update(id: number, title: string, description: string, positiveType: positiveType, difficultType: difficultType, resetType: resetType) {

    const todo = this.findById(id);

    todo.title = title;
    todo.description = description;
    todo.positiveType = positiveType;
    todo.difficultType = difficultType;
    todo.resetType = resetType;

  }

  findById(id: number): ITodo {
    return this.todos.find(t => t.id === id)
  }

  delete(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
