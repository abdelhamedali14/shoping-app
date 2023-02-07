import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [LogInComponent, RegisterComponent],
})
export class AuthentcationModule {}
