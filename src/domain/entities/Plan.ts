import type { Boton } from "./Boton";

export interface Plan {
  id: string;
  slug: string;
  nombre: string;
  duracionMeses: number;
  descripcionCorta: string;
  ahorroPorcentaje: number;
  boton: Boton;
  categorias: string[];
  destacado: boolean;
  activo: boolean;
  orden: number;
}