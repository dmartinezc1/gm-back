import { IsString ,IsNumber} from "class-validator";

export class ReservaDto {

    @IsString()
    readonly correo: string;
 
    @IsString()
    readonly fecha: string;

    @IsString()
    readonly nombreMascota: string;

    @IsString()
    readonly tipo:string;

    @IsString()
    readonly procedimiento: string;

    @IsNumber()
    readonly duracion: number;

    @IsString()
    readonly estado:string;


}
