import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { positiveType } from '../../enums/positiveType';
import { difficultType } from '../../enums/difficultType';
import { resetType } from '../../enums/resetType';
import { TodoService } from '../../services/todo.service';
import { switchMap, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {
    console.log('asd')
  }



  public positiveTypeEnum = positiveType;
  public difficultTypeEnum = difficultType;
  public resetTypeEnum = resetType;


  todoService = inject(TodoService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  isNew: boolean = true;
  id: string;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    positiveType: new FormControl(positiveType.positive, Validators.required),
    difficultType: new FormControl(difficultType.easy, Validators.required),
    resetType: new FormControl(resetType.daily, Validators.required)
  })

  $todo = this.route.paramMap
    .subscribe((param) => {
      this.id = param.get('id')
      console.log('work ?', this.id)

      if (this.id === 'new') return

      const todo = this.todoService.findById(+this.id)

      this.form.setValue({
        title: todo.title,
        description: todo.description,
        positiveType: todo.positiveType,
        difficultType: todo.difficultType,
        resetType: todo.resetType
      })
      this.isNew = false
    })

  onSubmit() {
    console.log(this.form)
    if (this.form.valid) {
      const { title, description, positiveType, difficultType, resetType } = this.form.value

      this.todoService.create(title, description, positiveType, difficultType, resetType)
      this.router.navigate(['/'])
    }
  }

  delete() {
    console.log()
    this.todoService.delete(+this.id)
    this.router.navigate(['/'])
  }

  save() {
    if (this.form.valid) {
      const { title, description, positiveType, difficultType, resetType } = this.form.value

      this.todoService.update(+this.id, title, description, positiveType, difficultType, resetType)
      this.router.navigate(['/'])
    }
  }
}
