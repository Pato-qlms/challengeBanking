/* eslint-disable prettier/prettier */
import { AppModule } from '../src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';


describe('EmpresaController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close(); 
  });

  it('POST /empresas/adhesion: debería adherir una nueva empresa', async () => {
    const createEmpresaDTO = {
      cuit: '20123456789',
      razonSocial: 'Mi Empresa SA',
      fechaAdhesion: new Date('2024-12-01T00:00:00Z'),
    };

    return request(app.getHttpServer())
      .post('/empresas/adhesion')
      .send(createEmpresaDTO)
      .expect(201)
      .expect((response) => {
        expect(response.body).toHaveProperty('_id');
        expect(response.body.cuit).toBe(createEmpresaDTO.cuit);
        expect(response.body.razonSocial).toBe(createEmpresaDTO.razonSocial);
        expect(new Date(response.body.fechaAdhesion).toISOString()).toBe(
          createEmpresaDTO.fechaAdhesion.toISOString(),
        );
      });
  });

  it('GET /empresas/adhesion: debería retornar las empresas adheridas', async () => {
    return request(app.getHttpServer())
      .get('/empresas/adhesion')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('GET /empresas/transferencias: debería retornar empresas con transferencias del último mes', async () => {
    return request(app.getHttpServer())
      .get('/empresas/transferencias')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
});
