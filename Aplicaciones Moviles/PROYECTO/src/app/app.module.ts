import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  email: string;
  password: string;
  name: string;
  nameSaved = false;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log('Error al iniciar sesión:', error);
      });
  }

  saveName() {
    this.firestore.collection('users').add({ name: this.name })
      .then(() => {
        this.nameSaved = true;
      })
      .catch((error) => {
        console.log('Error al guardar el nombre:', error);
      });
  }
}
