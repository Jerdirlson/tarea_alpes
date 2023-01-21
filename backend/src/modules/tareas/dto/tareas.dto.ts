import { IsOptional, IsString } from "class-validator";

export class TareasDto {
    @IsString()
    title : string;
    @IsString()
    description : string;
    @IsString()
    color : string;
}