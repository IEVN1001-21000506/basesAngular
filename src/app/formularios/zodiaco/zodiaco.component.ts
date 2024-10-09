import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class zodiacoComponent implements OnInit {
  formulario!: FormGroup;
  imageWidth: number = 400;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  signoZodiacal: string = '';
  imagenSigno: string = '';
  mensaje: string = '';
  edad: number = 0; 
 
  private signosZodiacales: Record<string, string> = {
    'Rata': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rat.svg/1024px-Rat.svg.png',
    'Buey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ox.svg/1024px-Ox.svg.png',
    'Tigre': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tiger.svg/1024px-Tiger.svg.png',
    'Conejo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rabbit.svg/1024px-Rabbit.svg.png',
    'Dragón': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dragon.svg/1024px-Dragon.svg.png',
    'Serpiente': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Snake.svg/1024px-Snake.svg.png',
    'Caballo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Horse.svg/1024px-Horse.svg.png',
    'Cabra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Goat.svg/1024px-Goat.svg.png',
    'Mono': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monkey.svg/1024px-Monkey.svg.png',
    'Gallo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rooster.svg/1024px-Rooster.svg.png',
    'Perro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dog_2.svg/1024px-Dog_2.svg.png',
    'Cerdo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boar.svg/1024px-Boar.svg.png'
  };
 
  constructor() {}
 
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido1: new FormControl('', Validators.required),
      apellido2: new FormControl(''),
      dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anio: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      sexo: new FormControl('', Validators.required)
    });
  }
 
  calcularSigno(): void {
    if (this.formulario.valid) {
      const anio = this.formulario.get('anio')?.value;
      this.signoZodiacal = this.obtenerSignoZodiacal(anio);
      this.imagenSigno = this.obtenerImagenSigno(this.signoZodiacal);
    } else {
      this.signoZodiacal = '';
      this.imagenSigno = '';
    }
  }
 
  calcularEdad(dia: number, mes: number, anio: number): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
 
    if (
      hoy.getMonth() < mes - 1 ||
      (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)
    ) {
      edad--;
    }

    return edad;
  }
 
  obtenerSignoZodiacal(anio: number): string {
    const signos: string[] = [
      'Rata', 'Buey', 'Tigre', 'Conejo',
      'Dragón', 'Serpiente', 'Caballo',
      'Cabra', 'Mono', 'Gallo', 'Perro',
      'Cerdo'
    ];
 
    const baseYear = 1924;
    const index = (anio - baseYear) % 12;
 
    return signos[(index + 12) % 12];
  }
 
  obtenerImagenSigno(signo: string): string {
    return this.signosZodiacales[signo] || '';
  }
 
  mostrarImagen(): void {
    this.muestraImg = !this.muestraImg;
  }
 
  onSubmit(): void {
    this.calcularSigno();
    if (this.formulario.valid) {
      const dia = this.formulario.get('dia')?.value;
      const mes = this.formulario.get('mes')?.value;
      const anio = this.formulario.get('anio')?.value;
     
      this.edad = this.calcularEdad(dia, mes, anio);
      const nombreCompleto = `${this.formulario.get('nombre')?.value} ${this.formulario.get('apellido1')?.value} ${this.formulario.get('apellido2')?.value}`;
      this.mensaje = `¡Hola, ${nombreCompleto}! Tu signo zodiacal es ${this.signoZodiacal} y tu edad es ${this.edad} años.`;
    }
  }
}