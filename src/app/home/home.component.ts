import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, MatSidenavModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {
    this.router.navigateByUrl('/featured');
  }

}
