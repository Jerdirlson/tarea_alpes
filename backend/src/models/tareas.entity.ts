import { Table, Column, Model, DataType  } from "sequelize-typescript";

@Table
export class Tareas extends Model {
    @Column({
        type : DataType.INTEGER,
        primaryKey : true,
        allowNull : false,
    })
    id : number;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    title : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    description : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    color : string;

}