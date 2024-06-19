import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './pages/todos/todos.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { TodoComponent } from './pages/todo/todo.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: TodosComponent },
            { path: 'rewards', component: RewardsComponent }
        ]
    },
    { path: 'todo/:id', component: TodoComponent }
];
