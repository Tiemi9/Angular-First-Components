import {Component, Input} from '@angular/core'

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class Button {
  @Input() label:string;
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['COMPRAR', 'VENDER', 'TROCAR'];
  buttonNumber: number = 9;
  buttonObject = {
    label: 'Adicionar ao Carrinho',
  };

  /* EVENT BIDING: vem do template html e vai para o components, passar no elemento html '(click)= "getAlert()"' || podemos passar paramentros tmabém.
   getAlert(num: number) {
    alert(num);
  }
   e no html: '(click)= "getAlert(9)"'
  */
  getAlert() {
    alert('Hey you!');
  }
}