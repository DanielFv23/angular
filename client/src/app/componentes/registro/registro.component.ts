import { Component, OnInit } from '@angular/core';
import {userRegistro} from '../../modelos/registroUser';
import { Router, ActivatedRoute} from '@angular/router';
import { GeneralService} from '../../servicios/serviceGeneral/general.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userRegistro: userRegistro = {
     id:0,
     usuario:'',
    contrasena:'',
     correo: ''
   }
  constructor(private service:GeneralService, private router : Router, private activedRoute :ActivatedRoute) { }

  ngOnInit() {
  }
  saveNewUser(){
     delete this.userRegistro.id;
     console.log(this.userRegistro);
     this.service.saveUser(this.userRegistro).subscribe(
       res=>{
         this.router.navigate(['/']);
         console.log(res);
       },
        error => console.log(error))
   }

}
