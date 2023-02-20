import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent {


  @Input() nice

  @Output() parent=new EventEmitter<any>


  a=[
    {    
      src:'https://cdn.pixabay.com/photo/2023/01/23/17/41/hut-7739262__340.jpg',
      name:'Beach',
      place:'Goa'
    },
    {    
      src:'https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=',
      name:'Sun Set',
      place:'Bangalore'
    },  
    {    
      src:'https://media.istockphoto.com/id/1214094455/photo/scenic-view-of-fjord-in-norway.jpg?s=612x612&w=0&k=20&c=F6RLt8asgtdkPBexDcANjgL4aRWmvY1KwVPplHm5tMA=',
      name:'Himalayan',
      place:'Himachal'
    },
    {    
      src:'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
      name:'Kaveri',
      place:'Talakadu'
    },

    
  ]


  transfer(){
    this.parent.emit(this.a);
  }



}
