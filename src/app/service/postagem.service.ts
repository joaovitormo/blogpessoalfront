import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://myworldblog.herokuapp.com/postagens')
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://myworldblog.herokuapp.com/postagens/${id}`)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://myworldblog.herokuapp.com/postagens', postagem)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://myworldblog.herokuapp.com/postagens', postagem)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://myworldblog.herokuapp.com/postagens/${id}`)
  }

  //pesquisar postagem
  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://myworldblog.herokuapp.com/postagens/titulo/${titulo}`)
  }

  putCurtir(id: number): Observable<Postagem> {
    return this.http.put<Postagem>(`https://myworldblog.herokuapp.com/postagens/curtir/${id}`, this.token)
  }

  putDescurtir(id: number): Observable<Postagem> {
    return this.http.put<Postagem>(`https://myworldblog.herokuapp.com/postagens/descurtir/${id}`, this.token)
  }

}
