/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmpresaEntity } from 'src/domain/entities/empresa.entity';
import { EmpresaRepository } from 'src/domain/repository/empresa.repository';

@Injectable()
export class GetEmpresasAdheridasUseCase {
  constructor(private readonly empresaRepository: EmpresaRepository) {}

  async execute(): Promise<EmpresaEntity[]> {
    try {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      // Buscar empresas adheridas en el rango de fechas
      const empresas = await this.empresaRepository.findAdheridas({ fechaInicio: lastMonth, fechaFin: new Date() });

      // Validar si no se encontraron empresas
      if (!empresas || empresas.length === 0) {
        return [];
      }

      return empresas;
    } catch (InternalServerErrorException) {
      throw new InternalServerErrorException('Ocurrió un error al obtener las empresas adheridas.');
    }
  }
}
