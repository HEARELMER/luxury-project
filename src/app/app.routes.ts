import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', component:InicioComponent},
    {path:'somos', component : SomosComponent},
    {path:'politicas', component : PoliticasComponent},
];
