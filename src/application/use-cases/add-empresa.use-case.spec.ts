/* eslint-disable prettier/prettier */
import { EmpresaRepository } from '../../domain/repository/empresa.repository';
import { AddEmpresaUseCase } from './add-empresa.use-case';

describe('AddEmpresaUseCase', () => {
  let addEmpresaUseCase: AddEmpresaUseCase;
  let empresaRepository: Partial<EmpresaRepository>; 

  beforeEach(() => {
    empresaRepository = {
      create: jest.fn().mockResolvedValue({
        id: '123',
        razonSocial: 'Empresa Test',
        cuit: '20123456789',
        fechaAdhesion: new Date(),
      }),
    };

    addEmpresaUseCase = new AddEmpresaUseCase(empresaRepository as EmpresaRepository);
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
