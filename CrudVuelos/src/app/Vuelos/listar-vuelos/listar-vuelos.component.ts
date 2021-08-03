import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/Modelo/Vuelo';
import { Cliente } from 'src/app/Modelo/Cliente';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent implements OnInit {

  vuelos:Vuelo[];
  vuelo:Vuelo=new Vuelo();
  id:any;
  cliente:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getVuelos().subscribe(data=>{this.vuelos=data;});

  }

  listarClientes(vuelo:Vuelo){

    localStorage.setItem("id",vuelo.id_vuelo.toString());
    this.router.navigate(["listar"]);
  }
}
