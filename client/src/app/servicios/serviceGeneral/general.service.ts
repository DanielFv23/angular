import { Injectable } from '@angular/core';
import { userRegistro } from '../../modelos/registroUser';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
 url_api: any = "http://localhost:3500/api";
  
 constructor(private HttpClient: HttpClient) { }

 saveUser(game:userRegistro){
  return this.HttpClient.post(`${this.url_api}/games`,game);
 }
 

}
