import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

// API irá receber o endereço da API
const API = "http://localhost:3000";

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) {}

  // irá receber como parametro o nome do usuário, e irá retornar o JSON do /nomeUsuario/photos
  // o JSON contém fotos que contém dados que estão no objeto Photo
  listFromUser(userName: string) {
    return this.http.get<Photo[]>(API + '/' + userName + '/photos');
  }

  // page: se o usuário inserir um localhost:3000/user/flavio/photos?page=2 a API irá retornas as imagens da página 2
  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params });
  }

}
