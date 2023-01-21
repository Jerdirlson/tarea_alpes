import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { env } from "src/app/enviroment/enviroment";
import { BehaviorSubject, Observable, tap, switchMap, take, map } from "rxjs";
import { Tarea, TareaServiceT, DelTarea } from "./tareas.types";
import { ApiResponse } from "src/app/models/apiResponse";

@Injectable({
    providedIn : 'root'
})

export class HomeService {

    constructor(private _httpClient : HttpClient){ }

    private initialTarea : Tarea[] = [];

    private _tareas : BehaviorSubject<Tarea[]> = new BehaviorSubject(this.initialTarea);

    get tareas$() : Observable<Tarea[]>
    {
        return this._tareas.asObservable();
    }

    getTareas() : Observable<ApiResponse>{
        return this._httpClient.get<ApiResponse>(`${env.backend}/tareas/listareas`).pipe(
            tap((res) => {
                this._tareas.next(res.data);                         //atento a los cambios de la variable
            })
        )
    }
    
    insertTarea(info: TareaServiceT): Observable<any> {
        return this._httpClient.post(`${env.backend}/tareas/insertTarea`, info).pipe(
          tap((res) => {
            
          }
          )
        )
      }


      updateTarea(info: TareaServiceT): Observable<any> {
        return this._httpClient.patch(`${env.backend}/tareas/updateTarea`, info).pipe(
          tap((res) => {
            
          }
          )
        )
      }

      delTareas( info : DelTarea ) : Observable<any> {  
        return this._httpClient.delete(`${env.backend}/tareas/delTarea`, info).pipe(
          tap((res) => {

          }
          )
        )
    }
}