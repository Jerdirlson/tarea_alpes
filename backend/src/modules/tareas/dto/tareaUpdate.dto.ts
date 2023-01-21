import { IsNumber, IsOptional, IsString } from "class-validator";

export class TareaUpdateDto {
    @IsNumber()
    id : number;
    @IsString()
    title : string;
    @IsString()
    description : string;
    @IsString()
    color : string;
}