import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private readonly oidcSecurityService = inject(OidcSecurityService);
  isAuthenticated: boolean = false;

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
      // this.isAuthenticated = false; // Assuming authResult is a boolean
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
