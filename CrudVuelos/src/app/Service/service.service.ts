import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { Vuelo } from '../Modelo/Vuelo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  url='http://localhost:8080/cliente/'

  url_crear='http://localhost:8080/guardar'

  url_editar='http://localhost:8080'

  url_eliminar='http://localhost:8080/eliminar'

  url_vuelos='http://localhost:8080/vuelo'

  getClientes(){

    return this.http.get<Cliente[]>(this.url);
  }

  createCliente(cliente:Cliente){

    return this.http.post<Cliente>(this.url_crear,cliente);
  }

  getClientesId(id:number){

    return this.http.get<Cliente>(this.url_editar+"/"+id);
  }

  updateCliente(cliente:Cliente){

    return this.http.put<Cliente>(this.url_editar+"/"+cliente.id,cliente);
  }

  eliminarPersona(cliente:Cliente){

    return this.http.delete<Cliente>(this.url_eliminar+"/"+cliente.id)

  }

  getVuelos(){
    return this.http.get<Vuelo[]>(this.url_vuelos);
  }
}
