import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';

@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [
    SignInPageComponent
  ],
})
export class AuthModule {}
