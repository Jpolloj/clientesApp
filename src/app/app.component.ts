import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientesApp';

  constructor(private router:Router) { }

  listado(){
    this.router.navigate(["listar"]);
  }
}
