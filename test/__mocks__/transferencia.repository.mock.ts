/* eslint-disable prettier/prettier */

import { TransferenciaRepository } from "src/domain/repository/transferencia.repository";

export const mockTransferenciaRepository = (): Partial<TransferenciaRepository> => ({
  findTransferenciasLastMonth: jest.fn().mockResolvedValue([
    { idEmpresa: '1', importe: 1000 },
    { idEmpresa: '2', importe: 2000 },
  ]),
});
