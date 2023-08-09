import { Component } from '@angular/core';

import { Producto } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Tienda';
  edad = 18;
  img = "https://www.uplers.com/wp-content/uploads/2022/05/AngularJs-Frameworks.jpg"
  btn = true;
  persona = {
    nombre: 'David',
    apellido: 'Orozco',
    age: 18,
    avatar: 'https://pps.whatsapp.net/v/t61.24694-24/345356866_3402672116714511_8350754741430174530_n.jpg?ccb=11-4&oh=01_AdRkau8FbO82_lPQSVBQFpn5QPJDboIHAnrxfv2XkYEF0Q&oe=64DB8610'
  }

  nombres: string[] = ['David', 'Orozco', 'Lopez']

  nuevo= ''

  productos: Producto[] = [{
    name: 'EL mejor juguete',
    price: 565,
    image: 'https://shop.mattel.com/cdn/shop/products/dhwzsfhf9czrqaaq1tux.jpg?v=1685580128',
    category: 'all',
  },
  {
    name: 'Bicicleta casi nueva',
    price: 356,
    image: 'https://http2.mlstatic.com/D_NQ_NP_755969-MCO43314928990_082020-O.webp'
  },
  {
    name: 'Colleción de albumnes',
    price: 34,
    image: 'https://mosaic.scdn.co/640/ab67616d00001e02005ee342f4eef2cc6e8436abab67616d00001e022fbd77033247e889cb7d2ac4ab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02548f7ec52da7313de0c5e4a0'
  },
  {
    name: 'Mis libros',
    price: 23,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/a296e741-9527-4f0d-890f-24f91af8b663.__CR0,0,300,400_PT0_SX300_V1___.jpg'
  },
  {
    name: 'Casa para perro',
    price: 34,
    image: 'https://mueblesdummi.com/wp-content/uploads/2022/04/10045344_1.jpg'
  },
  {
    name: 'Gafas',
    price: 3434,
    image: 'https://colombia.com.co/wp-content/uploads/2020/04/Monturas-Gafas-Ray-Ban-RB6377-2909-50-21-145-Marketplace-Colombia-001.jpg'
  }]

  registrar ={
    nombre: '',
    email: '',
    password: '',

  }


  toggleButton() {
    this.btn = !this.btn;
  }

  ageUp() {
    this.persona.age++;
  }


  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  }

  newName(){
    this.nombres.push(this.nuevo);
    this.nuevo = '';

  }

  delete(index: number){
    this.nombres.splice(index, 1)
  }

  onRegistrar(){
    console.log(this.registrar);
  }
}

