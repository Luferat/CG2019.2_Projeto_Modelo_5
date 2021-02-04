import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Notícias', url: '/news', icon: 'newspaper' },
    { title: 'Faça Contato', url: '/folder/Favorites', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'information-circle' }
  ];

  constructor() { }
}
