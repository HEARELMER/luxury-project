import { Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { SomosComponent } from './components/pages/somos/somos.component';
import { PoliticasComponent } from './components/pages/politicas/politicas.component';
import { DetailPlaceComponent } from './components/pages/detail-place/detail-place.component';


export const routes: Routes = [
    {path:'', pathMatch:'full', component:InicioComponent },
    {path:'somos', component : SomosComponent},
    {path:'politicas', component : PoliticasComponent},
    {path:'places/:name_place', component: DetailPlaceComponent}
];
