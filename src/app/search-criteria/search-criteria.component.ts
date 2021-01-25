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
  showBrowseForm: boolean = false;

  ngOnInit(): void {
    
  }

  searchRecipes() {
    let query = document.querySelector('input').value;
    this.RecipeServiceService.getSearchResults(query).subscribe((data) => {
      this.initialSearchItems = data;
      this.searchItems = this.initialSearchItems.hits;
  });
}

dietSearchRecipes(query: string) {
  this.RecipeServiceService.getDietSearchResults(query).subscribe((data) => {
    this.initialSearchItems = data;
    this.searchItems = this.initialSearchItems.hits;
});
}

healthSearchRecipes(query: string) {
  this.RecipeServiceService.getHealthSearchResults(query).subscribe((data) => {
    this.initialSearchItems = data;
    this.searchItems = this.initialSearchItems.hits;
});
}

}
