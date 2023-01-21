import { Inject, Injectable, Res } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { Tareas } from 'src/models/tareas.entity';
import { TareasDto } from './dto/tareas.dto';
import { TareaUpdateDto } from './dto/tareaUpdate.dto';
import { TareaDel } from './dto/tareasDel.dto';
import { historialTareas } from '../../models/historial.emtity';

@Injectable()

export class TareasService {
  constructor(
    @Inject('TAREAS_REPOSITORIO')
    private readonly tareasRepositorio : Tareas,

  ){ }
        
        async listareas(): Promise <Tareas[]> {
          try {
            return await this.tareasRepositorio.sequelize.query(
            `

              SELECT * FROM todolist_jerdirlson.todos;
    
            `,
            {
              model : Tareas,
              mapToModel : true,
            }
            )
          }catch(err){
            throw err;
          }
        }

        async insertTarea( tareas : TareasDto ): Promise < any > {
          try {
            return await this.tareasRepositorio.sequelize.query(
            `

              INSERT INTO todolist_jerdirlson.todos("title", "description", "color")
              VALUES(:nombre::varchar, :description::varchar, :color::varchar)            
    
            `,
            {
              model : Tareas,
              mapToModel : true,
              replacements:{
                nombre : tareas.title,
                description : tareas.description,
                color : tareas.color
              }
            }
            )
          }catch(err){
            throw err;
          }
        }

        async updateTarea( tareas : TareaUpdateDto ): Promise < any > {
          try {
            return await this.tareasRepositorio.sequelize.query(
            `

              UPDATE todolist_jerdirlson.todos SET 
                "title"=:nombre::varchar,
                "description"=:description::varchar,
                "color"=:color::varchar
              WHERE "id" =:id::integer;
    
            `,
            {
              model : Tareas,
              mapToModel : true,
              replacements:{
                id : tareas.id,
                nombre : tareas.title,
                description : tareas.description,
                color : tareas.color
              }
            }
            )
          }catch(err){
            throw err;
          }
        }

        async deleteTarea( tarea : TareaDel ): Promise < any > {
          try {
            return await this.tareasRepositorio.sequelize.query(
            `
              DELETE FROM todolist_jerdirlson.todos WHERE id = :id::integer;
              
            `,
            {
              model : Tareas,
              mapToModel : true,
              replacements:{
                id : tarea
              }
            }
            )
          }catch(err){
            throw err;
          }
        }
      }
