import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamposFiltroService } from '../../services/camposFiltro.service';
import { Plato } from '../../../model/plato';

@Component({
  selector: 'app-receta',
  standalone: false,
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css'
})
export class RecetaComponent implements OnInit {


  
  platoElegido?:Plato
  ingrediente:string=''
  ingredientes:string[]=[]
  medida:string=''
  medidas:string[]=[]
  filtrosService:CamposFiltroService

  constructor(private route: ActivatedRoute,filtrosService:CamposFiltroService) {
    this.filtrosService=filtrosService;
  }
  
  ngOnInit (){
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getPlatoElegido(id);
    this.getIngredientes(id);
    this.getMedidas(id);
    
   
  }

  getPlatoElegido(id:any){
    this.filtrosService.getPlatoById(id).subscribe((data:any)=>{
    
          this.platoElegido=data.meals[0];
          console.log(this.platoElegido);
       })
  }

  getIngredientes(id:any){
    this.filtrosService.getPlatoById(id).subscribe((data:any)=>{
      for (let index = 1; index < 21; index++) {

        this.ingrediente=data.meals[0][`strIngredient${index}`];  
        if(this.ingrediente!=''){
          this.ingredientes.push(this.ingrediente);
        }
      }
      console.log(this.ingredientes); 
   })
  }
  
  getMedidas(id:any){
    this.filtrosService.getPlatoById(id).subscribe((data:any)=>{
      for (let index = 1; index < 21; index++) {

        this.medida=data.meals[0][`strMeasure${index}`];  
        if(this.medida!=''){
          this.medidas.push(this.medida);
        }
        else{
          this.medidas.push(' ');
        }
      }
      console.log(this.medidas); 
   })
  }
  
}
