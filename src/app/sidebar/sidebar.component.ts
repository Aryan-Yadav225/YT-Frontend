import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
