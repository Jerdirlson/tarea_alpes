import { IsNumber} from "class-validator";

export class TareaDel {
    @IsNumber()
    id : number;
}