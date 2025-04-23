import { Component, Input } from '@angular/core';
import { Plato } from '../../../model/plato';
import { CamposFiltroService } from '../../services/camposFiltro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plato',
  standalone: false,
  templateUrl: './plato.component.html',
  styleUrl: './plato.component.css'
})
export class PlatoComponent {

    idMeal:string='' 
    strMeal:string=''
    strCategory:string=''
    strArea:string=''
    strMealThumb:string=''
    strTags:string[]=[]
    idProductoElegido:string=''
   

   

    @Input() plato?:Plato;
   
  

    filtrosService:CamposFiltroService;

  constructor(filtrosService:CamposFiltroService,private router: Router){
    this.filtrosService=filtrosService;
  }


    elegirPlato(id:string){
   
        this.router.navigate(['/receta',id]);

    }

   }

   



