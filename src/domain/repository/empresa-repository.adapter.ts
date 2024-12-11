/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmpresaRepository } from './empresa.repository';
import { EmpresaEntity } from '../../domain/entities/empresa.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmpresaRepositoryAdapter extends EmpresaRepository {
  constructor(@InjectModel('Empresa') private readonly model: Model<EmpresaEntity>) {
    super();
  }

  async create(empresa: EmpresaEntity): Promise<EmpresaEntity> {
    const createdEmpresa = new this.model(empresa);
    return createdEmpresa.save();
  }

  async findAdheridas(filter: any): Promise<EmpresaEntity[]> {
    return this.model.find({ fechaAdhesion: { $gte: filter.fechaInicio, $lte: filter.fechaFin } });
  }

  async findConTransferencias(filter: { fechaInicio: Date; fechaFin: Date }): Promise<EmpresaEntity[]> {
    return this.model.find({
      fechaTransferencia: {
        $gte: filter.fechaInicio,
        $lte: filter.fechaFin,
      },
    });
  }
}
