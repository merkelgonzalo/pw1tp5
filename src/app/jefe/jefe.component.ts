import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class JefeComponent implements OnInit {

  jefeForm: FormGroup;
  mostrar = false;
  jefe: any
  valorBoton = '';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initJefeForm()
  }

  initJefeForm(){
    this.jefeForm = this.fb.group({
      nombre: '',
      apellido: '',
      sueldo: ''
    });
  }

  enviarDatos(){
    this.jefe = this.jefeForm.value;
  }

  onRecibe(event: string){
    debugger;
    this.mostrar = true;
    this.valorBoton = event;
  }


}
