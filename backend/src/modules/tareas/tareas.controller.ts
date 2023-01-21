import { Body, Controller, Get, HttpStatus, Post, Res, Patch, Delete } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { Tareas } from 'src/models/tareas.entity';
import { TareasDto } from './dto/tareas.dto';
import { TareaUpdateDto } from './dto/tareaUpdate.dto';
import { TareaDel } from './dto/tarea.del.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}
  
  @Get('/listareas')
  async listareas(@Res() res) {

    const tareas =  await this.tareasService.listareas();

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data : tareas,
      message : 'Exitoso'
    })
  }
  @Post('/insertTarea')
  async  insertTarea (@Res() res, @Body() tarea : TareasDto){

    const insert = await this.tareasService.insertTarea(tarea);

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data : insert,
      message : 'Se creo la tarea exitosamente'
    })
  }

  @Patch('/updateTarea')
  async  updateTarea (@Res() res, @Body() tarea : TareaUpdateDto){

    const update = await this.tareasService.updateTarea(tarea);

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data : update,
      message : 'Se actualizo la tarea exitosamente '
    })
  }

  @Delete('/deleteTarea')
  async  deleteTarea (@Res() res, @Body() tarea : TareaDel){

    const borrar = await this.tareasService.deleteTarea(tarea);

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data : borrar,
      message : 'Se elimino la tarea exitosamente '
    })
  }
}
