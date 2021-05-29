import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() vieneDeJefe: any

  @Output() eventoBoton = new EventEmitter<string>();
  
  nuevoSueldo = ''

  constructor() { }

  ngOnInit(): void {
  }

  devolver(){
    // this.vieneDeJefe.sueldo = 0;
    this.vieneDeJefe.sueldo = this.nuevoSueldo;
    this.eventoBoton.emit(this.vieneDeJefe.sueldo)
  }

}
