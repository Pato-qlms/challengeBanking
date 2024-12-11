/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transferencia {
  @Prop({ required: true })
  idEmpresa: string;

  @Prop({ required: true })
  importe: string;

  @Prop({ required: true })
  cuentaDebito: string;

  @Prop({ required: true })
  cuentaCredito: string;

  @Prop({ required: true })
  fechaAdhesion: Date;
}

export const TransferenciaSchema = SchemaFactory.createForClass(Transferencia);