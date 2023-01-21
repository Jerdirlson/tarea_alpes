import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'historialtareas',
    loadChildren : () => import ('src/app/modules/tareas/tareas.module').then(m => m.TareasModule),
  },
  
  {
    path : 'home',
    loadChildren : () => import ('src/app/modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
