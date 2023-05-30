import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  correoElectronico: string;
  contrasena: string;

  constructor(private afAuth: AngularFireAuth) {
    this.correoElectronico = '';
    this.contrasena = '';
  }

  iniciarSesion() {
    this.afAuth.signInWithEmailAndPassword(this.correoElectronico, this.contrasena)
      .then(() => {
      })
      .catch((error) => {
        console.error(error);
      });
  }
}