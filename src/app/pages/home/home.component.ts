import { Component, OnInit } from '@angular/core';
import { Plato } from '../../../model/plato';
import { CamposFiltroService } from '../../services/camposFiltro.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  platosDestacados:Plato[]=[]
 

  idMeal1:string="52859";
  idMeal2:string="52832";
  idMeal3:string="52777";
  idMeal4:string="52870";
  arrayIds:string[]=["52859","52832","52777","52870"]

  filtrosService:CamposFiltroService

  constructor(filtrosService:CamposFiltroService) {
    this.filtrosService=filtrosService;
  }
  
  ngOnInit (){
   
    this.getDetallesPlato()
  }

  getDetallesPlato(){

  for (const element of this.arrayIds) {
    this.filtrosService.getPlatoById(element).subscribe((data:any)=>{
      let plato=data.meals[0];
      console.log(
        "Se muestra el plato destacado:"
      );
      console.log(plato);
      if(plato!=undefined){
        this.platosDestacados.push(plato); 
      }
    })
  }    
    
          
  
      
  }
}
