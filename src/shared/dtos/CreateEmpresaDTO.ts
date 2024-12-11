/* eslint-disable prettier/prettier */
import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpresaDTO {
  @ApiProperty({ description: 'CUIT de la empresa', example: '20123456789' })
  @IsString()
  @IsNotEmpty()
  cuit: string;

  @ApiProperty({ description: 'Razón social de la empresa', example: 'Mi Empresa SA' })
  @IsString()
  @IsNotEmpty()
  razonSocial: string;

  @ApiProperty({ description: 'Fecha de adhesión', example: '2024-12-01T00:00:00Z' })
  @IsDate()
  @IsNotEmpty()
  fechaAdhesion: Date;
}
