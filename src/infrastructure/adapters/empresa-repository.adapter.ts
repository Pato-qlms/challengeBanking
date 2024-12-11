/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmpresaRepository } from 'src/domain/repository/empresa.repository';
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

  async findConTransferencias(): Promise<EmpresaEntity[]> {
    const ultimoMes = new Date();
    ultimoMes.setMonth(ultimoMes.getMonth() - 1);
  
    const empresas = await this.model.aggregate([
      {
        $lookup: {
          from: 'transferencias', 
          localField: '_id',      
          foreignField: 'idEmpresa',
          as: 'transferencias',
        },
      },
      {
        $match: {
          'transferencias.fechaTransferencia': { $gte: ultimoMes },
        },
      },
      {
        $project: {
          transferencias: 0, 
        },
      },
    ]);
  
    return empresas;
  }
}
