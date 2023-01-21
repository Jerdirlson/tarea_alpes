import { json } from "sequelize";
import { Table, Column, Model, DataType  } from "sequelize-typescript";

@Table
export class historialTareas extends Model {
    @Column({
        type : DataType.INTEGER,
        primaryKey : true,
        allowNull : false,
    })
    id_log_tarea? : number;

    @Column({
        type : DataType.JSON,
        allowNull : false,
    })
    log? : JSON;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    fecha_modificacion? : string;

}