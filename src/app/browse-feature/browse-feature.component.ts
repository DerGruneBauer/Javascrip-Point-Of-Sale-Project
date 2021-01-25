import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browse-feature',
  templateUrl: './browse-feature.component.html',
  styleUrls: ['./browse-feature.component.css']
})
export class BrowseFeatureComponent implements OnInit {

  @Output() find = new EventEmitter;
  @Output() findHealth = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

findRecipe(query: string){
  this.find.emit(query);
}
findRecipeHealth(query: string){
  this.findHealth.emit(query);
}

}
