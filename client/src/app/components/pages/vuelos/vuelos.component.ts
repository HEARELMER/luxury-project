import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsideComponent } from '../../tmplate/aside/aside.component';

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.scss'
})

export class VuelosComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  type_vuelo:any = 'Nacionales';
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params); // Aquí puedes acceder a los parámetros de la ruta
      params = params['type'];
      this.type_vuelo = params;
    });
  }
}


