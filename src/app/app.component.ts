import { Component } from '@angular/core';
import { Empleado } from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmpleadoSeleccionado: Empleado = new Empleado();
  EmpleadoArray: Empleado[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'Angelica', country: 'USA' },
    { id: 3, name: 'Joe', country: 'USA' }
  ];
  AddOREdit() {
    if (this.EmpleadoSeleccionado.id == 0) {
      this.EmpleadoSeleccionado.id = this.EmpleadoArray.length + 1;
      this.EmpleadoArray.push(this.EmpleadoSeleccionado);

    }
    this.EmpleadoSeleccionado = new Empleado();
  }
  Edit(empleado: Empleado) {
    this.EmpleadoSeleccionado = empleado;
  }

  delete() {
    if (confirm('estas seguro de querer eliminar?')) {
      this.EmpleadoArray = this.EmpleadoArray.filter(emp => emp !== this.EmpleadoSeleccionado);
      this.EmpleadoSeleccionado = new Empleado()
    }
  }

}
