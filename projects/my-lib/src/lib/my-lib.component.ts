import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
<div class="row app-continer mb-4 pt-4">
<div class="col md-12 text center">
<h2>Addition</h2>
<input type="number" #firstnumber/>
<br>
<br>
<input type="number" #secondtnumber/>
<br>
<br>
<button (click)="calculate(firstnumber.value,secondtnumber.value)">Add</button>
<br>
<div class="result"> this result = {{result}}</div>
</div>
</div>
  `,
  styles: ['.result {margin: 10px 0 0 0;  padding: 10px; border: 1px solid black; width: 115px; background-color: #eee; font-weight: bold; font-size: 18px;}'
]
})
export class MyLibComponent implements OnInit{
  result!:number;
constructor(){
}
calculate(val1:string,val2:string){
this.result = parseFloat(val1)+parseFloat(val2);
}
ngOnInit(): void {
  
}
}
