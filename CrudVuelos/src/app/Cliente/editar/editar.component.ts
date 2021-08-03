import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente:Cliente= new Cliente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){

    let id=localStorage.getItem("id");
    this.service.getClientesId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }

  Actualizar(cliente:Cliente){

    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Cliente actualizado")
      this.router.navigate(["listar"])
    })


  }

}
