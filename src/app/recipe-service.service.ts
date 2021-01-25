import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private httpClient: HttpClient) { }

  ApiId: string = '1969a411';
  ApiKey: string = '720b7458df1ca9dafe9916c7b299aa0f';
  ApiUrl: string = `https://api.edamam.com/search?q=rice&app_id=${this.ApiId}&app_key=${this.ApiKey}`;

  //needed to add HTTPclient in app.module and also needed to add recipelist componenet in base component (app.component)

  public ApiCall() {
     return this.httpClient.get(this.ApiUrl);
  }

  getSearchResults(ingredient: string) {
   let searchUrl: string = `https://api.edamam.com/search?q=${ingredient}&app_id=${this.ApiId}&app_key=${this.ApiKey}`;
  //  diet is working. need to set up potential seperate api call for health search
    return this.httpClient.get(searchUrl)
  }

  getDietSearchResults(diet: string) {
    let searchUrl: string = `https://api.edamam.com/search?q=${diet}&app_id=${this.ApiId}&app_key=${this.ApiKey}&diet=${diet}`
     return this.httpClient.get(searchUrl)
   }

   getHealthSearchResults(health: string) {
    let searchUrl: string = `https://api.edamam.com/search?q=${health}&app_id=${this.ApiId}&app_key=${this.ApiKey}&health=${health}`
     return this.httpClient.get(searchUrl)
   }



}
