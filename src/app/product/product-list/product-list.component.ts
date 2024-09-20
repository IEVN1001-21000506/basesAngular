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
          "modelo": "sentra",
          "descripcion": "2 puertas",
          "year": "marzo 12 2021",
          "precio": 120000,
          "marca": "nisan",
          "color": "blanco",
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBB5_JDrpahQJzQ4Y6U0HwfHS1wFHdUZ74w&s"
      
      },
      {
          "productoId": 2,
          "modelo": "a4",
          "descripcion": "2 puertas",
          "year": "marzo 12 2021",
          "precio": 130000,
          "marca": "volsvagen",
          "color": "blanco",
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3hro7olm8DX8_jWsGyn0Aau9cxi73h7r-w&s"
      
      },
      {
          "productoId": 3,
          "modelo": "a5",
          "descripcion": "2 puertas",
          "year": "marzo 12 2021",
          "precio": 150000,
          "marca": "chevrolet",
          "color": "blanco",
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHz_1KZ194hzPMoqOCcN9rx4VnCm7OwkpLJQ&s"
      
      },
      
  ]
}
