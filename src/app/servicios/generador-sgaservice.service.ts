import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/Elemento';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorSGAServiceService {

  //public baseUrl = "http://localhost:8080/api"
  public baseUrl = "http://generadorsga.com.ar/api"
  constructor(public http : HttpClient) { }

  public getTags(){
    return this.http.get<Elemento[]>(`${this.baseUrl}/getTags`)
  }


  public downloadFile(fileName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getTagByCode/${fileName}`, { responseType: 'blob' }).pipe(map((response : any)=>{
        return {
            filename: `${fileName}.pdf`,
            data: response
        };
    }));
}
}
