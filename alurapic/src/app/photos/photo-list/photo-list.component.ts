import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})

export class PhotoListComponent implements OnInit {

  // precisamos tipar o tipo do photos pois ele dá erro no subscribe
  // criamos o tipo Photo
  photos: Photo[] = [];
  filter = '';
  userName = '';
  hasMore = true;
  currentPage = 1;

  // somente injeção de dependencia
  constructor( private photoService: PhotoService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    /* const userName = this.activatedRoute.snapshot.params.userName;
    // criação de um serviço que irá passar o parametro flavio, e irá subscrever no array de photos as fotos lidas na api
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);  */

    // as fotos terão uma rota ativa em que retornará a lista de fotos
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
  }

}
