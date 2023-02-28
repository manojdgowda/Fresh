import { Component ,OnInit,OnChanges,Input, SimpleChange, SimpleChanges} from '@angular/core';
import { hooks1 } from '../app-parent/hoo';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {


  @Input()  parent
  @Input() pare


  constructor(){
    console.log('Constructor is calling.....')
  }

  ngOnInit(){
    console.log('NgOnInit is Calling.....')
  }

  ngOnChanges(a:SimpleChanges){
    console.log("NgOnChanges is Calling...",a);
  }

}
