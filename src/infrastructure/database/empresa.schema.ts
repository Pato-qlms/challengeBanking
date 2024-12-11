/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Empresa {
  @Prop({ required: true })
  cuit: string;

  @Prop({ required: true })
  razonSocial: string;

  @Prop({ required: true })
  fechaAdhesion: Date;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
