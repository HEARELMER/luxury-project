import { Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { SomosComponent } from './components/pages/somos/somos.component';
import { PoliticasComponent } from './components/pages/politicas/politicas.component';
import { DetailPlaceComponent } from './components/pages/detail-place/detail-place.component';
import { ContactosComponent } from './components/pages/contactos/contactos.component';
import { VuelosComponent } from './components/pages/vuelos/vuelos.component';
import { AlertComponent } from './components/tmplate/alert/alert.component';


export const routes: Routes = [
    {path:'', pathMatch:'full', component:InicioComponent },
    {path:'somos', component : SomosComponent},
    {path:'politicas', component : PoliticasComponent},
    {path:'contactos', component : ContactosComponent},
    {path:'places/:name_place', component: DetailPlaceComponent},
    {path:'alert', component:AlertComponent},
    {path:'vuelos/:type', component: VuelosComponent}
];
