/* eslint-disable prettier/prettier */
import { GetEmpresasAdheridasUseCase } from '../src/application/use-cases/get-empresas-adheridas.use-case';
import { mockEmpresaRepository } from './__mocks__/empresa.repository.mock';

describe('GetEmpresasAdheridasUseCase', () => {
  let useCase: GetEmpresasAdheridasUseCase;
  let empresaRepository: Partial<ReturnType<typeof mockEmpresaRepository>>;

  beforeEach(() => {
    empresaRepository = mockEmpresaRepository();
    useCase = new GetEmpresasAdheridasUseCase(empresaRepository as any);
  });

  it('debería retornar las empresas adheridas en el último mes', async () => {
    const result = await useCase.execute();

    const fechaInicio = new Date();
    fechaInicio.setMonth(fechaInicio.getMonth() - 1);

    expect(empresaRepository.findAdheridas).toHaveBeenCalledWith({
      fechaInicio: expect.any(Date),
      fechaFin: expect.any(Date),
    });
    expect(result).toEqual([
      { id: '1', nombre: 'Empresa 1' },
      { id: '2', nombre: 'Empresa 2' },
    ]);
  });
});
