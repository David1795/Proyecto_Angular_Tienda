import { Component } from '@angular/core';

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
    this.persona.nombre = element.value
  }


}

