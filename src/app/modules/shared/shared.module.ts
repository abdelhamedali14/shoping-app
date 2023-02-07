import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
