import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  public locales = [
    {value: 'es', name: 'Español'},
    {value: 'en', name: 'English'}
  ]

  translateServices = inject(TranslateService);

  changeLanguaje(event: Event) {
    // const changeEvent = event.target.value;
    if (event.target) {
      const changeEvent = event.target as HTMLInputElement;
      this.translateServices.use(changeEvent.value);
    }
  }

  saludar() {
    console.log('holi')
  }
}
