/* eslint-disable prettier/prettier */

import { EmpresaRepository } from "src/domain/repository/empresa.repository";

export const mockEmpresaRepository = (): Partial<EmpresaRepository> => ({
  create: jest.fn().mockResolvedValue({
    id: '123',
    razonSocial: 'Empresa Test',
    cuit: '20123456789',
    fechaAdhesion: new Date(),
  }),
  findAdheridas: jest.fn().mockResolvedValue([
    { id: '1', nombre: 'Empresa 1' },
    { id: '2', nombre: 'Empresa 2' },
  ]),
});
