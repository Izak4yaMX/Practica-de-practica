import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-cajonera-hijo',
  templateUrl: './componente-cajonera-hijo.component.html',
  styleUrls: ['./componente-cajonera-hijo.component.css'],
})
export class ComponenteCajoneraHijoComponent implements OnInit {
  constructor() {}

  imagen: any;
  mostrar(id: string) {
    this.imagen = document.getElementById('imagen') as HTMLImageElement;

    switch (id) {
      case 'primer':
        this.imagen.src =
          'https://cdn1.coppel.com/images/catalog/pr/7187312-1.jpg';
        break;
      case 'segundo':
        this.imagen.src =
          'https://ik.imagekit.io/instaleap/bodegaAurrera/image/upload/v1591796520/gr/images/product-images/img_large/00692190661074L.jpg?tr=w-449';
        break;
      case 'tercero':
        this.imagen.src =
          'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/t150/global-spi/enterprise-servers-poweredge-t150-hero-504x350-ng.psd?fmt=jpg&wid=504&hei=350';
        break;
        defaut: break;
    }
  }

  ngOnInit() {}
}
