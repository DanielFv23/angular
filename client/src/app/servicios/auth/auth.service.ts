import { Injectable } from '@angular/core';
import { userRegistro } from '../../modelos/registroUser';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router}  from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_api: any = "http://localhost:3500/api";
  constructor(private HttpClient: HttpClient) { }

  loginUser(usuario:string, contrasena : string){
    return this.HttpClient.get(`${this.url_api}/games/${usuario}/${contrasena}`);
  }
  getUsuario(usuario:string, contrasena : string): Observable<userRegistro>{
    return this.HttpClient.get(`${this.url_api}/games/${usuario}/${contrasena}`);
  }
  
}
