import {Component} from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
  public autor: any = {nombre: 'Anthony', apellido: 'Carrasco'};
  public autor2: any = {nombre: 'Renato', apellido: 'Leyva'};

 constructor() { }

  show() {
    return  swal('Terminos y Condiciones', '<p style="text-align: justify">Este sitio web no es propiedad ni está afiliada a La Iglesia de Jesucristo de los Santos de los Últimos Días (algunas veces llamada la Iglesia Mormona o Iglesia SUD). Las opiniones aquí expresadas no representan necesariamente la posición de la Iglesia. Las opiniones expresadas por los usuarios individuales son de responsabilidad de los usuarios y no representan necesariamente la posición de la Iglesia. Para visitar las páginas oficiales de la Iglesia, sírvase a visitar</p>' + '<a href="https://www.iglesiajesucristosud.org/"> SUD</a>' + ' o ' + '<a href="https://www.comeuntochrist.org/"> Mormon</a>', 'info');
  }
}
