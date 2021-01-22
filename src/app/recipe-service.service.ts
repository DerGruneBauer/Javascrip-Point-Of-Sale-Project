import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private httpClient: HttpClient) { }

  userInput = '';
  ApiId = '1969a411';
  ApiKey = '720b7458df1ca9dafe9916c7b299aa0f';

  ApiUrl = `https://api.edamam.com/search?q=rice&app_id=${this.ApiId}&app_key=${this.ApiKey}`;
  

  //needed to add HTTPclient in app.module and also needed to add recipelist componenet in base component (app.component)

  public ApiCall() {
     return this.httpClient.get(this.ApiUrl);
  }




}
