import { Component ,OnInit,OnChanges,Input, SimpleChange, SimpleChanges,AfterContentInit, ContentChild, ElementRef,AfterContentChecked,AfterViewInit,AfterViewChecked, ViewChild} from '@angular/core';
import { hooks1 } from '../app-parent/hoo';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {


  @Input()  parent
  @Input() pare:hooks1
  @ContentChild('mano')  afterContent:ElementRef
  @ViewChild('H') asd:ElementRef
  @ViewChild('md') aqw:ElementRef

  constructor(){
    console.log('Constructor is calling.....')
  }

  ngOnInit(){
    console.log('NgOnInit is Calling.....')
  }

  ngOnChanges(a:SimpleChanges){
    console.log("NgOnChanges is Calling...",a);
  }

  ngDocheck(){
    console.log('DoCheck is calling',this.pare)
  }

  ngAfterContentInit(){
    console.log('AfterContentInit is Calling',this.afterContent);
    // this.afterContent.nativeElement.setAttribute('style',`color:${this.parent}`)
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked is calling......');
    this.afterContent.nativeElement.setAttribute('style',`color:${this.parent}`)
    
  }

  ngAfterViewInit(){
    console.log('NgAhterViewInit is calling....',this.asd);
    
  }
ngAfterViewChecked(){
  console.log('NgAfterViewChecked is calling ....');
  this.asd.nativeElement.setAttribute('style',`background:${this.parent}`)
  this.aqw.nativeElement.setAttribute('style',`${this.parent}=font-weight:Bolder`)
  
  
}



































}
