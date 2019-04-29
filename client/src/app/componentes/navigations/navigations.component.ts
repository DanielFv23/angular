import { Component, OnInit } from '@angular/core';
import { GeneralService} from '../../servicios/serviceGeneral/general.service';


@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.css']
})
export class NavigationsComponent implements OnInit {
  noticias :any[] =[];
  constructor(private generalService: GeneralService) { 
    
  }

  ngOnInit() {
  }

}
