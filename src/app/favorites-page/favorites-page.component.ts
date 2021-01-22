import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  constructor(private RecipeServiceService: RecipeServiceService) { }

  ngOnInit(): void {
  }

}
