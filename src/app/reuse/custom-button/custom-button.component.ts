import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() title:string;
  @Input() containerStyles:string;
  @Input() textStyles:string;
  @Input() isLoading:boolean;
  @Input() icon:string;
  @Output() handlePress: EventEmitter<any> = new EventEmitter<any>();

  onClick():void {
    this.handlePress.emit();
  }
  
  
}
