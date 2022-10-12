import { Alumnos } from '../models/personas';

export class Datos {
  static cursos: Alumnos[] = [
    {
      nombre: 'Esteban',
      apellido: 'Vargas',
      activo: true,
    },
    {
      nombre: 'Natalin',
      apellido: 'Eusebio',
      activo: true,
    },
    {
      nombre: 'German',
      apellido: 'Perez',
      activo: false,
    },
    {
      nombre: 'Angular',
      apellido: '1234',
      activo: true,
    },
  ];
}
