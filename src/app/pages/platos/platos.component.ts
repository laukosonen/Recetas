import { Component, Input, OnInit } from '@angular/core';
import { Plato } from '../../../model/plato';

import { Observable } from 'rxjs';
import { CamposFiltroService } from '../../services/camposFiltro.service';

@Component({
  selector: 'app-platos',
  standalone: false,
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent implements OnInit {



  categorias:any[]=[]
  areas:any[]=[]
  categoriaSeleccionada:string='todas'
  areaSeleccionada:string='todas'
  platosCategoria:Plato[]=[]
  platosArea:Plato[]=[]

  arrayTodos:Plato[]=[]
  todos:Plato[]=[]
  platos:Plato[]=[]

  platosFiltrados:Plato[]=[]
  clickFiltrar:boolean=false;




  filtrosService:CamposFiltroService;

  constructor(filtrosService:CamposFiltroService){
    this.filtrosService=filtrosService;
  }

  ngOnInit(){
    console.log("entrando");
    this.listarCategorias();
    this.listarAreas();  
 
  };

  

  listarCategorias(){
    console.log("listando categorias");
    
    this.filtrosService.getAllCategories().subscribe((data:any)=>{
      let arrayCategorias=data.meals;
    
      for (const element of arrayCategorias) {
        this.categorias.push(element.strCategory);
      }
      this.todosPlatos();
      });
      console.log(this.categorias);
      
  }

  listarAreas(){
    console.log("listando areas");
    
    this.filtrosService.getAllAreas().subscribe((data:any)=>{
      let arrayAreas=data.meals;

      for (const element of arrayAreas) {
        this.areas.push(element.strArea);
      }
      })
      console.log(this.areas);
  }

  filtrarPlatos(categoria:string,area:string){
    this.clickFiltrar=true;
    this.resetearFiltro();
    if (categoria=="todas"&& area=="todas"){
      this.platosFiltrados=this.todos;
      console.log(this.platosFiltrados);
     
    }
    else if(categoria!="todas" && area=="todas"){
      this.filtrosService.getPlatosByCategory(categoria).subscribe((data:any)=>{
        this.platosFiltrados=data.meals;
        this.platosCategoria=this.platosFiltrados;
        console.log(this.platosFiltrados);
      
         })
    }
    else if(categoria=="todas" && area!="todas"){
      this.filtrosService.getPlatosByArea(area).subscribe((data:any)=>{
        this.platosFiltrados=data.meals;
        this.platosArea=this.platosFiltrados;
        console.log(this.platosFiltrados);
      
         })
    }
    else{
        this.aplicarDosFiltros(categoria,area);
      
    }

    return this.platosFiltrados
  }


      aplicarDosFiltros(categoria:string,area:string){
        this.filtrosService.getPlatosByCategory(categoria).subscribe((data:any)=>{
          this.platosCategoria=data.meals;

        this.filtrosService.getPlatosByArea(area).subscribe((data:any)=>{
          this.platosArea=data.meals;
       
        for (const element of this.platosCategoria) {
          console.log("El id del primer elemento es:");
          
          console.log(element.idMeal);
          

          for (const item of this.platosArea) {
            if(item.idMeal==element.idMeal){
                this.platosFiltrados.push(item);            }
          }
        }
            console.log(this.platosFiltrados);
          });     
        });
      }


      todosPlatos(){
       for (const category of this.categorias) {
        this.filtrosService.getPlatosByCategory(category).subscribe((data:any)=>{
          this.arrayTodos=data.meals;
          for (const element of this.arrayTodos) {
            this.todos.push(element);      
          }
        })
        }
       }


       resetearFiltro(){
        this.platosFiltrados=[]
      }

      
       
      }
      










