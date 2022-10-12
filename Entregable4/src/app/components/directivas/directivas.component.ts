import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/personas';

@Component({
  selector: 'app-directivas',
  templateUrl: 'directivas.component.html',
  styleUrls: ['directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  listaNombres: Array<Persona> = [
    { nombre: 'Esteban', nota: 10 },
    { nombre: 'Natalin', nota: 8 },
    { nombre: 'Pablo', nota: 3 },
    { nombre: 'Marcela', nota: 4 },
    { nombre: 'Sofia', nota: 7 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
