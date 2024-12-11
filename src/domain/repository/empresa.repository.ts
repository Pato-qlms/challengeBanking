/* eslint-disable prettier/prettier */
import { EmpresaEntity } from '../entities/empresa.entity';

export abstract class EmpresaRepository {
  abstract create(empresa: EmpresaEntity): Promise<EmpresaEntity>;
  abstract findAdheridas(filter: any): Promise<EmpresaEntity[]>;
  abstract findConTransferencias(filter: any): Promise<EmpresaEntity[]>;
}
