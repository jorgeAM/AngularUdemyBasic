//modulos para que funcione router
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes que usaremos
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes: Routes = [
  { path: '', component: EmpleadoComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: '**', component: EmpleadoComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)