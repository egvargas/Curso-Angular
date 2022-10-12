import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnInit {
  filtro: string = '';
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '1234',
      profesor: 'Frink',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 10, 1),
      inscripcionAbierta: true,
      imagen: 'https://i.ytimg.com/vi/2GPJ9L6x-Is/maxresdefault.jpg',
    },
    {
      nombre: 'React Js',
      comision: '4321',
      profesor: 'Alex',
      fechaInicio: new Date(2022, 4, 1),
      fechaFin: new Date(2022, 12, 1),
      inscripcionAbierta: false,
      imagen:
        'https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png',
    },
    {
      nombre: 'UX',
      comision: '5678',
      profesor: 'Bren',
      fechaInicio: new Date(2023, 1, 1),
      fechaFin: new Date(2023, 11, 1),
      inscripcionAbierta: false,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ocXcf7NbP3zitBL74sYdjmp0BnFHqfznQ&usqp=CAU',
    },
    {
      nombre: 'SQL',
      comision: '5145',
      profesor: 'Yoel',
      fechaInicio: new Date(2023, 2, 1),
      fechaFin: new Date(2023, 12, 3),
      inscripcionAbierta: false,
      imagen: 'https://www.tecnologias-informacion.com/sql.png',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
