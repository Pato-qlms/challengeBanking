/* eslint-disable prettier/prettier */
import { EmpresaRepository } from '../src/domain/repository/empresa.repository';
import { GetEmpresasAdheridasUseCase } from '../src/application/use-cases/get-empresas-adheridas.use-case';

describe('GetEmpresasAdheridasUseCase', () => {
  let useCase: GetEmpresasAdheridasUseCase;
  let mockEmpresaRepository: Partial<EmpresaRepository>;

  const mockEmpresas = [
    { id: '1', nombre: 'Empresa 1' },
    { id: '2', nombre: 'Empresa 2' },
  ];

  beforeEach(() => {
    mockEmpresaRepository = {
      findAdheridas: jest.fn().mockResolvedValue(mockEmpresas),
    };

    useCase = new GetEmpresasAdheridasUseCase(
      mockEmpresaRepository as EmpresaRepository,
    );
  });

  it('debería retornar las empresas que hicieron transferencias el último mes', async () => {
    const result = await useCase.execute();

    const fechaInicio = new Date();
  fechaInicio.setMonth(fechaInicio.getMonth() - 1);
  const fechaFin = new Date();

  expect(mockEmpresaRepository.findAdheridas).toHaveBeenCalledWith({
    fechaInicio,
    fechaFin,
  });
    expect(result).toEqual(mockEmpresas);
  });
});
