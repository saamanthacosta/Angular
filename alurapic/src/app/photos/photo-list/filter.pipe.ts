import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

// o nome do pipe é filterByDescription, logo ele pode ser chamado em qualquer momento através dessa tag
@Pipe({
  name: 'filterByDescription'
})

export class FilterByDescription implements PipeTransform {

  // método do pipe, que irá transformar o texto lido do search em algo sem espaço e com tudo minúsculo
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    // se existe algo escrito no search, ele irá retornar a lista que contém a descrição identica ao q está escrito no search
    if (descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
    }
    // se não existir nada no search, ele irá retornar a lista com todas as fotos
    else {
      return photos;
    }
  }

}
