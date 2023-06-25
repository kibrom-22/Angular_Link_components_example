import { Component, EventEmitter, Input,Output } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {
 @Input() inputData?: string
 @Output() onButtonClick: EventEmitter<any> = new EventEmitter();
}
