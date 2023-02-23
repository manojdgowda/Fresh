import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  Countries=['India','UK',"USA",'Germany']

onSubmit(data:NgForm){
  console.log(data.value)
  console.log(data.dirty)
}
reset(data:NgForm){
  data.resetForm({
    Password:'Manoj Gowda'
  })
}


submit(data:NgForm){
  console.log( data.value);
  console.log(data.dirty);
  
  
}















}
