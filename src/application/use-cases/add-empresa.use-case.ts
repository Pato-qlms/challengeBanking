/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { EmpresaRepository } from '../../domain/repository/empresa.repository';
import { EmpresaEntity } from 'src/domain/entities/empresa.entity';

@Injectable()
export class AddEmpresaUseCase {
  constructor(private readonly empresaRepository: EmpresaRepository) {}

  async execute(dto: EmpresaEntity): Promise<EmpresaEntity> {
    try {
      if (!dto.cuit || !dto.razonSocial || !dto.fechaAdhesion) {
        throw new BadRequestException('Todos los campos son obligatorios: cuit, razonSocial, fechaAdhesion.');
      }

      return await this.empresaRepository.create(dto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Ocurrió un error al registrar la empresa.');
    }
  }
}
