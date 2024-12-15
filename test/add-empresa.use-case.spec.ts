/* eslint-disable prettier/prettier */
import { AddEmpresaUseCase } from '../src/application/use-cases/add-empresa.use-case';
import { mockEmpresaRepository } from './__mocks__/empresa.repository.mock';

describe('AddEmpresaUseCase', () => {
  let addEmpresaUseCase: AddEmpresaUseCase;
  let empresaRepository: Partial<ReturnType<typeof mockEmpresaRepository>>;

  beforeEach(() => {
    empresaRepository = mockEmpresaRepository();
    addEmpresaUseCase = new AddEmpresaUseCase(empresaRepository as any);
  });

  it('debería agregar una nueva empresa correctamente', async () => {
    const empresa = {
      razonSocial: 'Empresa Test',
      cuit: '20123456789',
      fechaAdhesion: new Date(),
    };

    const result = await addEmpresaUseCase.execute(empresa);

    expect(empresaRepository.create).toHaveBeenCalledWith(empresa);
    expect(result).toEqual({
      id: '123',
      razonSocial: 'Empresa Test',
      cuit: '20123456789',
      fechaAdhesion: expect.any(Date),
    });
  });
});
