import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly userService = inject(UserService);
  isAuthenticated: boolean = false;

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
      if (authResult.isAuthenticated) {
        this.userService.registerUser();
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens();
    this.oidcSecurityService.logoffLocal();
  }

}
