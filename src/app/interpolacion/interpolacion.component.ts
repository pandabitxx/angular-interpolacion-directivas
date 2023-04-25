import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  public nombre: string = 'Interpolacion' //Mostrar valores que estan en la logica
  public alumnos = [
        { nombre: 'Juan', edad: 20 },
        { nombre: 'María', edad: 22 },
        { nombre: 'Juan', edad: 20 },
        { nombre: 'Mario', edad: 22 },
        { nombre: 'Juanes', edad: 19 },
        { nombre: 'Marta', edad: 24 },
        { nombre: 'Juancho', edad: 20 },
        { nombre: 'Anderson', edad: 22 },
        { nombre: 'Pedro', edad: 19 }
      ];
  tieneAlumnosMayoresDeEdad() {
    return this.alumnos.every(alumno => alumno.edad >= 18);
    
  }
}
