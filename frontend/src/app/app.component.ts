import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _route : Router){

  }

  title = 'tarea_alpes';

  goToHistorial(){
    this._route.navigate(['historialtareas'])
  }

  goToMain(){
    this._route.navigate(['home'])
  }
}