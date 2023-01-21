//Aqui se definen las interfaces que se van a utilizar

export interface Tarea {
    id : number;
    title : string;
    description : string;
    color : string;
}

export interface TareaServiceT {
    id?: number; 
    title: string;
    description: string;
    color: string;
}

export interface DelTarea {
    id : number
}