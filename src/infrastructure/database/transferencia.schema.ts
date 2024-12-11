/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const TransferenciaSchema = new Schema({
  idEmpresa: { type: String, required: true },
  importe: { type: Number, required: true },
  cuentaDebito: { type: String, required: true },
  cuentaCredito: { type: String, required: true },
  fechaTransferencia: { type: Date, required: true },
});
