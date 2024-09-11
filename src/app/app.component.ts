import { afterRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ssr-i18n';
  constructor() {
    // console.log(localStorage.getItem('test'))
    // console.log("Se ejecuta en el cliente y en el server");
    // const platform = isPlatformBrowser(PLATFORM_ID);
    const platform = inject(PLATFORM_ID);
    // if (isPlatformBrowser(platform)) {
    //   console.log("Estoy en el cliente");
    //   console.log(localStorage.getItem('test'))
    // }

    afterRender(() => {
      console.log(localStorage.getItem('test'))
    })

    if (isPlatformServer(platform)){
      console.log("Estoy en el servidor");
    }
  }
}
