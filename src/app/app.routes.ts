import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>{
            return import('./pages/home/home.component').then((m) => m.HomeComponent)
        } 
    },
    {
        path: 'todos',
        loadComponent: () =>{
            return import('./pages/todos/todos.component').then((m) => m.TodosComponent)
        }
    },
    {
        path: 'profile',
        loadComponent: () =>{
            return import('./pages/profile/profile.component').then((m) => m.ProfileComponent)
        }
    }

    ]