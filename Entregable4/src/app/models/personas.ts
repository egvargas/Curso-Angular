export interface Curso {
  nombre: string;
  comision: string;
  profesor: string;
  fechaInicio: Date;
  fechaFin: Date;
  inscripcionAbierta: boolean;
  imagen: string;
}

export interface Persona {
  nombre: string;
  nota: number;
}

export interface Alumnos {
  nombre: string;
  apellido: string;
  activo: boolean;
}

export interface Curso2 {
  nombre: string;
  apellido: string;
  activo: boolean;
}
