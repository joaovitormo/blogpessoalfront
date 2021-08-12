import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  entrar(userLogin : UserLogin) : Observable<UserLogin>{
    return this.http.post<UserLogin>('https://myworldblog.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user : User) : Observable<User>{
    return this.http.post<User>('https://myworldblog.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://myworldblog.herokuapp.com/usuarios/${id}`)
  }

  putUsuario(user: User): Observable<User> {
    return this.http.put<User>('https://myworldblog.herokuapp.com/usuarios/alterar', user)
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != '') {
      ok = true
    }
    return ok
  }

  adm(){
    let ok: boolean = false

    if (environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }

}
