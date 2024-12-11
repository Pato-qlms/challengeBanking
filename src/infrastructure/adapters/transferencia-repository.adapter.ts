/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TransferenciaRepository } from '../../domain/repository/transferencia.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransferenciaEntity } from '../../domain/entities/transferencia.entity';

@Injectable()
export class TransferenciaRepositoryAdapter extends TransferenciaRepository {
  constructor(@InjectModel('Transferencia') private readonly model: Model<TransferenciaEntity>) {
    super();
  }

  async findTransferenciasLastMonth(): Promise<any[]> {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return this.model.find({ fechaTransferencia: { $gte: lastMonth } }).exec();
  }
}
