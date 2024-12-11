/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddEmpresaUseCase } from '../../application/use-cases/add-empresa.use-case';

import { GetEmpresasTransferenciasUseCase } from '../../application/use-cases/get-empresas-transferencias.use-case';
import { CreateEmpresaDTO } from '../../shared/dtos/CreateEmpresaDTO';
import { ApiOperation } from '@nestjs/swagger';
import { GetEmpresasAdheridasUseCase } from '../../application/use-cases/get-empresas-adheridas.use-case';
@Controller('empresas')
export class EmpresaController {
  constructor(
    private readonly addEmpresa: AddEmpresaUseCase,
    private readonly getEmpresasAdheridas: GetEmpresasAdheridasUseCase,
    private readonly getEmpresasTransferencias: GetEmpresasTransferenciasUseCase,
  ) {}

  @ApiOperation({ summary: 'Adherir una nueva empresa' })
  @Post('adhesion')
  async add(@Body() dto: CreateEmpresaDTO) {
    console.log('object', dto)
    return this.addEmpresa.execute(dto);
  }

  @ApiOperation({ summary: 'Obtener empresas adheridas el último mes' })
  @Get('adhesion')
  async getAdheridas() {
    return this.getEmpresasAdheridas.execute();
  }

  @ApiOperation({ summary: 'Obtener empresas con transferencias el último mes' })
  @Get('transferencias')
  async getTransferencias() {
    return this.getEmpresasTransferencias.execute();
  }
}
