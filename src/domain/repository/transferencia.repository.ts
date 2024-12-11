/* eslint-disable prettier/prettier */


export abstract class TransferenciaRepository {
    abstract findTransferenciasLastMonth(): Promise<any[]>;
  }
  
  