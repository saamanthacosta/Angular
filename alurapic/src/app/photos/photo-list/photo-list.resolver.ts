import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

// resolver é do tipo Observvable<Photo[]> pois o listFromUser (PhotoService) retorna esse tipo de dado
@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) { }

  // essa classe foi criada a fim de pegar os dados da foto antes de carregar o template
  // assim, a mensagem de nao fotos só será exibida se o usuário usar o filtro
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }
}
