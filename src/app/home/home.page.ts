import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonCardContent, IonSpinner, 
  IonImg, IonIcon 
} from '@ionic/angular/standalone';
import { RandomUserService } from '../services/random-user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonCard, IonCardHeader, IonCardTitle, 
    IonCardSubtitle, IonCardContent, IonSpinner, 
    IonImg
  ],
})
export class HomePage {
  
  user: any = null;     // Variabel penampung data
  isLoading = false;    // Status loading

  constructor(private userService: RandomUserService) {}

  // WAJIB PAKAI ASYNC / AWAIT (PROMISE)
  async generateUser() {
    this.isLoading = true; // Nyalakan loading
    
    try {
      // Tunggu data datang (Promise)
      const response = await this.userService.getRandomUser();
      
      // API RandomUser membungkus data dalam array 'results'
      this.user = response.results[0]; 
      
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengambil data user! Cek koneksi internet.');
    } finally {
      this.isLoading = false; // Matikan loading (sukses atau gagal)
    }
  }
}