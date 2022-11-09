import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  
  @ViewChild('txtBuscar') inputBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar() {
    const valor = this.inputBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }
    
    this.gifsService.buscarGifs(valor);

    this.inputBuscar.nativeElement.value = '';
  }
}
