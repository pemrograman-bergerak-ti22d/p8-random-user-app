import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  // Fungsi Async (Promise)
  async getRandomUser(): Promise<any> {
    const request$ = this.http.get<any>(this.apiUrl);
    // Ubah stream (Observable) menjadi janji (Promise) satu kali jalan
    return await lastValueFrom(request$);
  }
}