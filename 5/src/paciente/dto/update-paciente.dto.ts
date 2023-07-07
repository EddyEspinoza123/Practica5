import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';
import { IsBoolean, IsNotEmpty, IsOptional,IsString } from 'class-validator';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
    // @IsString()
    // @IsNotEmpty()
    // direccion:string;

    @IsString()
    @IsNotEmpty()
    estado?:boolean;
}
