import { Component ,OnInit,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

 q:Subscription;


//   ngOnInit(){


//     //promise
//     var promise=new Promise(r=>{
//       setTimeout(()=>{
//         r('Manoj Gowda,promise is working')
//       },4000)
//     })

//     promise.then(result=>console.log(result))


// //Observables

//     var observable=new Observable(s=>{
//       var a=0
//       setInterval(()=>{
//         a=a+1
//         s.next(a)
//       },1000)

//       setTimeout(()=>{       
//         s.next('Manoj GOwda,observable is working')
//       },1000)
//     })
//     this.q=observable.subscribe(result=>console.log(result))

//   }


  ngOnInit(){
    var promise=new Promise(resolve=>{
      console.log('Promises is Working Properly')
     
      setTimeout(()=>{
        console.log('Promises is Working Properly')
        resolve('1244')
        resolve('1244')
        resolve('1244')
        resolve('1244')
      },1000)
    })
    promise.then(result=>{console.log(result)})


    const obser=new Observable(sub=>{
      console.log('Observable is working properly')
      setTimeout(()=>{

        sub.next('Manoj')
        sub.next('Manoj')
        sub.next('Manoj')
        sub.next('Manoj')
        sub.next('Manoj')
      },1000)
    })
    // obser.subscribe(result=>{console.log(result)})

  }



  ngOnDestroy(){
    this.q.unsubscribe()
  }




//   Countries=['India','UK',"USA",'Germany']

// onSubmit(data:NgForm){
//   console.log(data.value)
//   console.log(data.dirty)
// }
// reset(data:NgForm){
//   data.resetForm({
//     Password:'Manoj Gowda'
//   })
// }


// submit(data:NgForm){
//   console.log( data.value);
//   console.log(data.dirty);
  
  
// }







// Nice=new FormControl('')

// update(){
//   this.Nice.setValue('Manoj Gowda')
//   console.log(this.Nice.value);
  
// }


// newName=new FormGroup({
//   Name:new FormControl(),
//   Designation:new FormControl()
// })

// onsubmit(){
//   console.log(this.newName.value)
// }



// Manoj1=new FormGroup({
//   Name:new FormControl(''),
//   Role:new FormControl(''),
//   Manoj:new FormControl('')

// })


// onsubmit(){
//   console.log(this.Manoj1.value)
// }


// Manoj=new FormGroup({
//   Username:new FormControl(''),
//   Email:new FormControl(''),
//   Ph:new FormControl('')
  
// })

// man=new FormControl('')


// a:any;
// onsubmit(){
//   console.log(this.Manoj.value);
//   console.log(this.man.value)
//   this.a= this.Manoj.dirty 
//   console.log(this.Manoj.dirty)
// }

// disabled(){
//   this.a===false;
//   document.getElementsByClassName('button')[1].innerHTML='disable'
// }

// enable(){
//   this.a==true;
//   document.getElementsByClassName('button')[1].innerHTML='enable'

// }







// Promises And Observables



























































}
