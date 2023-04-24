import { Component, OnInit } from '@angular/core';
import { ApistrapiService } from 'src/app/servicios/servicios/apistrapi.service';


@Component ({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})

export class CarruselComponent implements OnInit{ 
  dataStrapiSliders: any = [];  
  slider: any = [];  

  constructor(private ApistrapiService: ApistrapiService ) {}

   ngOnInit(): void {
    this.ApistrapiService.getStrapiSlider().then((dataStrapiSliders) => {
      dataStrapiSliders.data.forEach((element: any) => {
        element.attributes.Imagen.data.forEach((foto: any) => {
          let urlImg = "http://localhost:1337" + foto.attributes.url;
            this.slider.push({
              nombres: element.attributes.Titulo,
              bajada : element.attributes.Bajada,
              urlImg : urlImg
            });
        })
      })
    });
   }
}