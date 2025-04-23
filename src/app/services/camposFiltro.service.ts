import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamposFiltroService {

  constructor(private http:HttpClient) { }


  urlCategorias="https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  urlAreas="https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  urlPlatosCategoria="https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  urlPlatosArea="https://www.themealdb.com/api/json/v1/1/filter.php?a=";
  urlPlatoId="https://www.themealdb.com/api/json/v1/1/lookup.php?i="


  getAllCategories():Observable<any>{
    return this.http.get(this.urlCategorias);
  }

  getAllAreas():Observable<any>{
    return this.http.get(this.urlAreas);
  }

  getPlatosByCategory(categoria:string):Observable<any>{
    return this.http.get(`${this.urlPlatosCategoria}${categoria}`);
  }

  getPlatosByArea(area:String):Observable<any>{
    return this.http.get(`${this.urlPlatosArea}${area}`);
  }

  getPlatoById(id:string):Observable<any>{
    return this.http.get(`${this.urlPlatoId}${id}`);
  }

}
