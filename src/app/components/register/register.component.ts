import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeActivetedService } from 'src/app/services/de-activeted.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private deActicted: DeActivetedService) {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        userEmail: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/),
          ],
        ],
        userUserName: [
          '',
          [Validators.required, Validators.pattern(/^[\S]*$/)],
        ],
        // registerPassword: [
        //   '',
        //   Validators.pattern(
        //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        //   ),
        // ],
        // confirmRegisterPassword: [
        //   '',
        //   Validators.pattern(
        //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        //   ),
        // ],
        registerPassword: [
          '',
          [
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
        confirmRegisterPassword: [
          '',
          [
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(frm: FormGroup) {
    console.log(frm.controls['registerPassword'].value);
    console.log(frm.controls['confirmRegisterPassword'].value);
    console.log(frm.errors);
    return frm.controls['registerPassword'].value ===
      frm.controls['confirmRegisterPassword'].value
      ? null
      : { mismatch: true };
  }
  ngOnInit(): void {}
  get FormControls() {
    return this.registerForm.controls;
  }
  canExit(): boolean {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }
  ngOnDestroy() {
    if (this.registerForm.dirty) {
      this.canExit();
    }
  }
  handelRegisterForm() {
    console.log(this.registerForm);
  }
}
