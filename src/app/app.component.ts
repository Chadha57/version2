import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'polytech';
}
export class LowerPipeComponent  {
  
  value!: string;
  change(value: string) {
    this.value = value;
  }
}
