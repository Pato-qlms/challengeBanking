/* eslint-disable prettier/prettier */
import { IsOptional, IsDate } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterEmpresasDTO {
  @ApiPropertyOptional({ description: 'Fecha de inicio del filtro', example: '2024-11-01T00:00:00Z' })
  @IsDate()
  @IsOptional()
  fechaInicio?: Date;

  @ApiPropertyOptional({ description: 'Fecha de fin del filtro', example: '2024-11-30T23:59:59Z' })
  @IsDate()
  @IsOptional()
  fechaFin?: Date;
}
