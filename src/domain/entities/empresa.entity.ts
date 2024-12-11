/* eslint-disable prettier/prettier */

import { IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class EmpresaEntity {
  @IsString()
  cuit: string;

  @IsString()
  razonSocial: string;

  @IsDate()
  @Type(() => Date)
  fechaAdhesion: Date;
}
