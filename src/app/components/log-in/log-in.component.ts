import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private authSercices: AuthService) {}
  ngOnInit(): void {}
  handelLogInForm(form: any) {
    console.log(form);
    this.authSercices.setAuthServices(true);
  }
}
