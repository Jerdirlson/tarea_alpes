import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea, TareaServiceT, DelTarea } from './tareas.types';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/enviroment/enviroment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _HomeServices : HomeService, private http : HttpClient){}
  tareas$ : Observable<Tarea[]> = new Observable();

  displayedColums : string[] = ['id_tarea','nombre_tarea','descripcion_tarea','color_tarea'];
  idTarea : number = 0;
  nombreTarea: FormControl = new FormControl('');
  descripcionTarea: FormControl = new FormControl('');
  colorTarea: FormControl = new FormControl('');

  ngOnInit(): void {
   this.getTareas()   
  }

  getTareas(){

    this.tareas$ = this._HomeServices.tareas$;      //se sincroniza la variable interna del componente con la del servicio

    this._HomeServices.getTareas().subscribe(
      res => {
        console.log(this.tareas$)
      }
    )
  }

 serviceProduct() :void {
    const info = {
      title: this.nombreTarea.value,
      description: this.descripcionTarea.value,
      color: this.colorTarea.value,  
    }
      this._HomeServices.insertTarea(info).subscribe(res => {
        this.getTareas();
        console.log(info)
      });
  }

  limpiarForm() : void{
    this.idTarea = 0;
    this.nombreTarea.setValue('');
    this.descripcionTarea.setValue('');
    this.colorTarea.setValue('');
  }

  delTareas(info : DelTarea) : void {
    this._HomeServices.delTareas(info)
    console.log(info)
  }

  
}
