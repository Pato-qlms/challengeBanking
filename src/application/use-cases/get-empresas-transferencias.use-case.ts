/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmpresaRepository } from 'src/domain/repository/empresa.repository';
import { TransferenciaRepository } from 'src/domain/repository/transferencia.repository';

@Injectable()
export class GetEmpresasTransferenciasUseCase {
  constructor(
    private readonly transferenciaRepository: TransferenciaRepository,
    private readonly empresaRepository: EmpresaRepository,
  ) {}

  async execute(): Promise<any[]> {
    try {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      // Obtener transferencias del último mes
      const transferencias = await this.transferenciaRepository.findTransferenciasLastMonth();
      if (!transferencias || transferencias.length === 0) {
        return [];
      }

      // Extraer IDs de empresas
      const empresaIds = transferencias.map((t) => t.idEmpresa);

      // Buscar empresas por IDs
      const empresas = await this.empresaRepository.findAdheridas(empresaIds);

      // Validar si no se encontraron empresas asociadas
      if (!empresas || empresas.length === 0) {
        return [];
      }

      return empresas;
    } catch (InternalServerErrorException) {
      throw new InternalServerErrorException('Ocurrió un error al obtener las empresas con transferencias.');
    }
  }
}
