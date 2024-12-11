/* eslint-disable prettier/prettier */
import { TransferenciaRepository } from '../../domain/repository/transferencia.repository';
import { GetEmpresasTransferenciasUseCase } from './get-empresas-transferencias.use-case';

describe('GetEmpresasTransferenciasUseCase', () => {
  let useCase: GetEmpresasTransferenciasUseCase;
  let transferenciaRepository: Partial<TransferenciaRepository>;

  beforeEach(() => {
    transferenciaRepository = {
      findTransferenciasLastMonth: jest.fn().mockResolvedValue([
        { idEmpresa: '1', importe: 1000 },
        { idEmpresa: '2', importe: 2000 },
      ]),
    };

    useCase = new GetEmpresasTransferenciasUseCase(
      transferenciaRepository as TransferenciaRepository,
    );
  });

  it('debería retornar las transferencias del último mes', async () => {
    const result = await useCase.execute();

    expect(transferenciaRepository.findTransferenciasLastMonth).toHaveBeenCalled(); // Verifica que se llama al repositorio
    expect(result).toEqual([
      { idEmpresa: '1', importe: 1000 },
      { idEmpresa: '2', importe: 2000 },
    ]); // Verifica el resultado esperado
  });

  it('debería retornar un mensaje si no hay transferencias', async () => {
    (transferenciaRepository.findTransferenciasLastMonth as jest.Mock).mockResolvedValue([]);

    const result = await useCase.execute();

    expect(transferenciaRepository.findTransferenciasLastMonth).toHaveBeenCalled();
    expect(result).toEqual(['no hay transferencias en ese rango de fechas']); // Mensaje cuando no hay transferencias
  });
});
