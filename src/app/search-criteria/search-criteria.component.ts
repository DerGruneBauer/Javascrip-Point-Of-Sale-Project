import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  
  constructor(private RecipeServiceService: RecipeServiceService) { }

  initialSearchItems: any;
  searchItems = [];

  ngOnInit(): void {
    
  }

  searchRecipes() {
    let query = document.querySelector('input').value;
    this.RecipeServiceService.getSearchResults(query).subscribe((data) => {
      this.initialSearchItems = data;
      this.searchItems = this.initialSearchItems.hits;
  });
}

buttonSearchRecipes(query: string) {
  this.RecipeServiceService.getSearchResults(query).subscribe((data) => {
    this.initialSearchItems = data;
    this.searchItems = this.initialSearchItems.hits;
    console.log(data);
});
}

}
