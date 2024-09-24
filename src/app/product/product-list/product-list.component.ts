import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWith:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFiter:string='';

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos: IProductos[] = [
      {
          "ProductoId": 1,
          "Modelo": "sentra",
          "Descripcion": "2 puertas",
          "Year": "marzo 12 2021",
          "Precio": 120000,
          "Marca": "nisan",
          "Color": "blanco",
          "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBB5_JDrpahQJzQ4Y6U0HwfHS1wFHdUZ74w&s"
      
      },
      {
          "ProductoId": 2,
          "Modelo": "a4",
          "Descripcion": "2 puertas",
          "Year": "marzo 12 2021",
          "Precio": 130000,
          "Marca": "volsvagen",
          "Color": "blanco",
          "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3hro7olm8DX8_jWsGyn0Aau9cxi73h7r-w&s"
      
      },
      {
          "ProductoId": 3,
          "Modelo": "a5",
          "Descripcion": "2 puertas",
          "Year": "marzo 12 2021",
          "Precio": 150000,
          "Marca": "chevrolet",
          "Color": "blanco",
          "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHz_1KZ194hzPMoqOCcN9rx4VnCm7OwkpLJQ&s"
      
      },
      
  ]
}
