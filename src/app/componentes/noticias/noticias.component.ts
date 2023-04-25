import { Component, OnInit } from '@angular/core';
import { ApistrapiService } from 'src/app/servicios/servicios/apistrapi.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
 noticiaArray: any = [];

  constructor(private ApistrapiService: ApistrapiService ) {}

  ngOnInit(): void {
    this.ApistrapiService.getStrapiNoticias().then((dataStrapiNoticias) => {
      dataStrapiNoticias.data.forEach((element: any) => {
        //traer los titulos de las noticias
        console.log("objeto", element)
        const titNoticia = element.attributes.Titulo;
        console.log(titNoticia);
        element.attributes.Imagennoticia.data.forEach((foto: any) => {
          let urlImg = "http://localhost:1337" + foto.attributes.url;
          console.log(urlImg);
          this.noticiaArray.push({
            titulo: titNoticia,
            urlImg: urlImg  
          })
        });
      });
    });
   }
}
