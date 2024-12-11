/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmpresaEntity } from '../../domain/entities/empresa.entity';
import { EmpresaRepository } from '../../domain/repository/empresa.repository';

@Injectable()
export class GetEmpresasAdheridasUseCase {
  constructor(private readonly empresaRepository: EmpresaRepository) {}

  async execute(): Promise<EmpresaEntity[]> {
    try {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      const empresas = await this.empresaRepository.findAdheridas({ fechaInicio: lastMonth, fechaFin: new Date() });

      if (!empresas || empresas.length === 0) {
        return [];
      }

      return empresas;
    } catch (InternalServerErrorException) {
      throw new InternalServerErrorException('Ocurrió un error al obtener las empresas adheridas.');
    }
  }
}
