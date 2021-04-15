import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarListComponent } from './car-list/car-list.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';
import { RentListComponent } from './rent-list/rent-list.component';

const routes: Routes = [
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: 'Criar Usuário' }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: { title: 'Listar Usuários' }
  },
  {
    path: 'car-create',
    component: CarCreateComponent,
    data: { title: 'Criar Carro' }
  },
  {
    path: 'car-list',
    component: CarListComponent,
    data: { title: 'Listar Carros' }
  },
  {
    path: 'rent-edit',
    component: RentEditComponent,
    data: { title: 'Alugar Carro' }
  },
  {
    path: 'rent-list',
    component: RentListComponent,
    data: { title: 'Listar Aluguéis' }
  },
  {
    path: '',
    redirectTo: '/car-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
