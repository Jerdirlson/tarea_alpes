import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { TareasProvider } from './tareas.provider';

@Module({
  controllers: [TareasController],
  providers: [TareasService, ...TareasProvider]
})
export class TareasModule {}
