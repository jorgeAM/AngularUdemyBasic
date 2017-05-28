//modulos para que funcione router
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes que usaremos
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: 'coches', component: CochesComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)