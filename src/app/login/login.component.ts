import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/auth/login', this.credentials).subscribe({
      next: (response) => {
        console.log('Login success:', response);
        // Store token, navigate, etc.
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
}
