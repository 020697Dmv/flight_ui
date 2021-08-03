import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import {ServiceService} from '../../Service/service.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
    
  }

  Editar(cliente:Cliente){

    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["editar"]);
   
  }

  Elimiar(cliente:Cliente){
      this.service.eliminarPersona(cliente)
      .subscribe(data=>{

        this.clientes=this.clientes.filter(p=>p!==cliente);
        alert("se elimino")
      })


  }
}