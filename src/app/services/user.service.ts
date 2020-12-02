import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
