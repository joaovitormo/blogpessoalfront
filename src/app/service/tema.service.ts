import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://myworldblog.herokuapp.com/temas')
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://myworldblog.herokuapp.com/temas/${id}`)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://myworldblog.herokuapp.com/temas', tema)
  }

  putTema(tema : Tema): Observable<Tema>{
    return this.http.put<Tema>('https://myworldblog.herokuapp.com/temas', tema)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://myworldblog.herokuapp.com/temas/${id}`)
  }

  //pesquisa tema
  getByNomeTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://myworldblog.herokuapp.com/temas/descricao/${descricao}`)
  }
}
