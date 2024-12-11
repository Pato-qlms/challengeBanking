/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
// import { EmpresaRepository } from '../../domain/repository/empresa.repository';
import { TransferenciaRepository } from '../../domain/repository/transferencia.repository';

@Injectable()
export class GetEmpresasTransferenciasUseCase {
  constructor(
    private readonly transferenciaRepository: TransferenciaRepository,
    //  private readonly empresaRepository: EmpresaRepository,
  ) {}

  async execute(): Promise<any[]> {
    try {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      const transferencias =
        await this.transferenciaRepository.findTransferenciasLastMonth();
      if (!transferencias || transferencias.length === 0) {
        return ['no hay transferencias en ese rango de fechas'];
      }

      return transferencias;
    } catch (InternalServerErrorException) {
      throw new InternalServerErrorException(
        'Ocurrió un error al obtener las empresas con transferencias.',
      );
    }
  }
}
