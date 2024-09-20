import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWith:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos: any[] = [
      {
          "productoId": 1,
          "modelo": "rubicon",
          "descripcion": "4 puertas",
          "year": "enero 15 2020",
          "precio": 1200000,
          "marca": "jeep",
          "color": "negro",
          "imgUrl": "https://img.remediosdigitales.com/511ec0/jeep-r-wrangler-unlimited-rubicon-edicion-deluxe-2020_2-1-/1366_2000.jpg"
      
      },
      {
          "productoId": 2,
          "modelo": "vento",
          "descripcion": "4 puertas",
          "year": "mayo 2 2020",
          "precio": 180000,
          "marca": "volsvagen",
          "color": "azul",
          "imgUrl": "https://img.remediosdigitales.com/6f6fdc/volkswagen-vento-allstar-2017-mexico-2-/1366_2000.jpg"
      
      },
      {
          "productoId": 3,
          "modelo": "tsuru",
          "descripcion": "4 puertas",
          "year": "marzo 12 2021",
          "precio": 30000,
          "marca": "nissan",
          "color": "blanco",
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEP_vIKAg18pDQ8OTBGyMWgeKJGlqshvs0A&s"
      
      },
      
  ]
}
