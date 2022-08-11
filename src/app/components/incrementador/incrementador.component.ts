import { Component, Input, Output, EventEmitter, OnInit, HostListener } from "@angular/core";

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.clase = `btn ${this.clase}`;
  }

  
  @Input('valor') progreso: number = 10;
  @Input('btnClass') clase: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  @HostListener('keyup', ['$event.target.value'])
  onKeyUpEvent(value) {
    if(value >= 100) {
      this.valorSalida.emit(100);
      return value = 100;
    } else if (value == "") {
      this.valorSalida.emit(0);
      return value = 0;
    }
  }
  cambiarValor ( valor: number) {
    if (this.progreso >= 100) {
      if(valor >= 0 || this.progreso > 100) {
        this.valorSalida.emit(100);
        return this.progreso = 100;
      } 
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  } 
  onChange ( nuevoValor: number ){
    if (nuevoValor < 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
