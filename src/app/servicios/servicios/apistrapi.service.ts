import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios from 'axios';    


@Injectable({
  providedIn: 'root'
})
export class ApistrapiService {

  constructor(private http: HttpClient) { }
   
  //Obtengo API Slider
    async getStrapiSlider() { 
      const conf = {
        headers: {
         Authorization: 'Bearer ' + '05cf225a113170e4dcd516df74a2d37ff1d4256d0c568799aa1c5c5277d76acd1ab7b4752fc68561744f7d36984a468a21a64fffac47e90e3781ed2df2dfb7e672b8cdd045705a334eeb6c386d954daee90a0367eb39285ca8ed76f1cdb3b947a256a0fe22240c6397ed62ecb5bfaae48c2acf4ec8eb83045fffafe9791fbd4f'
        }
      }
      const responseSliders = await axios.get('http://localhost:1337/api/sliders?populate=*', conf)
        try {
          const dataStrapiSliders = responseSliders.data;
          return dataStrapiSliders;
        } catch (error) {
          console.log(error);
        }
    }
}
