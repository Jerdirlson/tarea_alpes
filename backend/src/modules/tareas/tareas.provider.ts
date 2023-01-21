import { Tareas } from "src/models/tareas.entity";

export const TareasProvider = [
    {
        provide : 'TAREAS_REPOSITORIO',
        useValue : Tareas
    }
]