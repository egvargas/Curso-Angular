import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Curso2 } from '../../models/personas';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css'],
})
export class DemoTablaComponent implements OnInit {
  cursos: Curso2[] = [
    { nombre: 'Esteban', apellido: 'Vargas', activo: true },
    { nombre: 'Natalin', apellido: 'Eusebio', activo: true },
    { nombre: 'German', apellido: 'Perez', activo: false },
    { nombre: 'Kaeil', apellido: 'Fart', activo: false },
  ];
  columnas: string[] = ['nombre', 'apellido', 'activo'];
  dataSource: MatTableDataSource<Curso2> = new MatTableDataSource<Curso2>(
    this.cursos
  );

  constructor() {}

  ngOnInit(): void {}

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
  filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (curso: Curso2, filtro: string) {
      return curso.nombre
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (curso: Curso2, filtro: string) {
      return curso.apellido
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  editar() {
    console.log(this.cursos);
  }
}
