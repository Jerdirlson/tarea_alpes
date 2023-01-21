import { IsOptional, IsString, IsNumber } from 'class-validator';

export class TareaDel {
    @IsNumber()
    id : number;
}