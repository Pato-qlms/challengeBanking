/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TransferenciaDTO {
  @ApiProperty({ description: 'Importe de la transferencia', example: 1500.75 })
  @IsNumber()
  @IsNotEmpty()
  importe: number;

  @ApiProperty({ description: 'Id de la empresa que realiza la transferencia', example: '64123abc123' })
  @IsString()
  @IsNotEmpty()
  idEmpresa: string;

  @ApiProperty({ description: 'Cuenta de débito', example: '12345678' })
  @IsString()
  @IsNotEmpty()
  cuentaDebito: string;

  @ApiProperty({ description: 'Cuenta de crédito', example: '87654321' })
  @IsString()
  @IsNotEmpty()
  cuentaCredito: string;
}
