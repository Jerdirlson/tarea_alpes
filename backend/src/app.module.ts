import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; 
import { TareasModule } from './modules/tareas/tareas.module';

@Module({
  imports: [DatabaseModule, TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
