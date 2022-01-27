import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface RootObject {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}
export interface Datum {
  fact: string;
  length: number;
}
export interface Link {
  url: string;
  label: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  apiURL: string = 'https://catfact.ninja';

  constructor(private httpClient: HttpClient) {
    this.getMatches;
   }

  getMatches(){
    return this.httpClient.get<RootObject>(`${this.apiURL}/facts`);
  }
}

