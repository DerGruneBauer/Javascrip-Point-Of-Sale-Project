import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  favorites: any[];

  constructor(
    private RecipeServiceService: RecipeServiceService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }
}
