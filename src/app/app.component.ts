import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyButtonComponent} from "./my-button/my-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'center-element';
}
