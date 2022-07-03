import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  
  constructor(private http: HttpClient) { }

  getCatFacts() {
    return this.http.get('https://catfact.ninja/facts').pipe(
      map((response: any) => response.data)
    )
  }
}
