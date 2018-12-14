import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUm: number = 0;
  numeroDois: number = 0;
  operacao: string = 'SOMA';

  response: any = {};

  constructor(private http: HttpClient){

  }

  onClickExercutarOperacao(){
    const calculadora = {
    operacao: this.operacao,
    numeroUm: this.numeroUm,
    numeroDois: this.numeroDois
  };

  this.http.post('https://calculadoragabrielnoda.herokuapp.com/api/calculadora',calculadora).subscribe(response =>this.response = response);
  }
}
