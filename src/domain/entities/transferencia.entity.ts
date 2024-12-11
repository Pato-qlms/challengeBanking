/* eslint-disable prettier/prettier */

import { IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class TransferenciaEntity {
    @IsString()
    idEmpresa: string;

    @IsNumber()
    importe: number;

    @IsString()
    cuentaDebito: string;

    @IsString()
    cuentaCredito: string;

    @IsDate()
    @Type(() => Date) 
    fechaTransferencia: Date;
}
  