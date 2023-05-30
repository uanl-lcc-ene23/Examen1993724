import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent {
  playlistName: string;
  youtubeLink: string;

  constructor(private router: Router) {}

  addPlaylist() {
    console.log('Añadiendo playlist:', this.playlistName);
    console.log('Enlace de YouTube:', this.youtubeLink);

    this.playlistName = '';
    this.youtubeLink = '';
    this.router.navigate(['/add-playlist']);
  }
}
