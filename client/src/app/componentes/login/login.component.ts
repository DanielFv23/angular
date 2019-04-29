import { Component, OnInit } from '@angular/core';
import {userRegistro} from '../../modelos/registroUser';
import { Router, ActivatedRoute} from '@angular/router';
import { GeneralService} from '../../servicios/serviceGeneral/general.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userRegistro: userRegistro = {
   id:0,
   usuario:'',
   contrasena:'',
   correo: ''
  }
  
  constructor(private service:GeneralService,
                private router : Router, private activedRoute :ActivatedRoute,
                private toastr: ToastrService,
                private serviceAuth :AuthService) { }
  ngOnInit() {
  }

  onLogin(usuario:string, contrasena:string){
      console.log (usuario + " " + contrasena)
      this.serviceAuth.getUsuario(usuario,contrasena).subscribe (
        res=>{   
          this.router.navigate(['/Pefil']);
          console.log(res); },
        error => {
          this.toastr.error ('Error','Usuario o contraseña invalidos');
          console.log(error);
        }  
      );
  }

}
