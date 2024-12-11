/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaSchema } from './infrastructure/database/empresa.schema';
import { EmpresaController } from './infrastructure/controllers/empresa.controller';
import { AddEmpresaUseCase } from './application/use-cases/add-empresa.use-case';
import { GetEmpresasTransferenciasUseCase } from './application/use-cases/get-empresas-transferencias.use-case';
import { EmpresaRepositoryAdapter } from './infrastructure/adapters/empresa-repository.adapter';
import { GetEmpresasAdheridasUseCase } from './application/use-cases/get-empresas-adheridas.use-case';
import { TransferenciaSchema } from './infrastructure/database/transferencia.schema';
import { TransferenciaRepositoryAdapter } from './infrastructure/adapters/transferencia-repository.adapter';
import { TransferenciaRepository } from './domain/repository/transferencia.repository';
import { EmpresaRepository } from './domain/repository/empresa.repository';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:testData@empresas.ed2p9.mongodb.net/?retryWrites=true&w=majority&appName=empresas',
    ),
    MongooseModule.forFeature([
      { name: 'Empresa', schema: EmpresaSchema },
      { name: 'Transferencia', schema: TransferenciaSchema },
    ]),
  ],
  controllers: [EmpresaController],
  providers: [
    {
      provide: EmpresaRepository,
      useClass: EmpresaRepositoryAdapter,
    },
    {
      provide: TransferenciaRepository,
      useClass: TransferenciaRepositoryAdapter,
    },
    AddEmpresaUseCase,
    GetEmpresasAdheridasUseCase,
    GetEmpresasTransferenciasUseCase,
  ],
})
export class AppModule {}