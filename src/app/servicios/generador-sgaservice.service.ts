import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/Elemento';

@Injectable({
  providedIn: 'root'
})
export class GeneradorSGAServiceService {

  public localUrl = "http://localhost:8080"

  constructor(public http : HttpClient) { }

  public getTags(){
    return this.http.get<Elemento[]>(`${this.localUrl}/getTags`)
  }

  public getTagsByCode(code : String){
    this.http.get("http://localhost:8080/getTagByCode")
  }
}
