import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-register',
templateUrl: 'register.page.html',
styleUrls: ['register.page.scss']
})
export class RegisterPage {
user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};
mensaje: string = '';
spinner: boolean = false;

constructor(private router: Router) { }

register() {
    this.spinner = true;

    // Simulación de registro. Reemplaza con la lógica real de registro.
    setTimeout(() => {
    this.spinner = false;
    if (this.user.password === this.user.confirmPassword) {
        // Lógica para registrar al usuario (por ejemplo, enviar datos a un servidor)
        this.router.navigate(['/login']); // Redirige a la página de inicio de sesión después del registro.
    } else {
        this.mensaje = 'Las contraseñas no coinciden. Inténtalo de nuevo.';
    }
    }, 2000); // Simula un tiempo de espera para el registro.
}
}
