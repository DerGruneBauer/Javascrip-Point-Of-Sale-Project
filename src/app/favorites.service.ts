import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  //declare favorites array
  private favorites: any[] = [];

  constructor() {}

  //return array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }
}
