let taskinput=document.getElementById('taskinput')
let addtask=document.getElementById('btn')
let emptytask=document.getElementById('emptytask')
let alltask=document.querySelector('.alltask')
let span1=document.querySelector('.span1')
let span2=document.querySelector('.span2')
let span3=document.querySelector('.span3')
let taskcount=document.querySelector('.task-count')
let complete=document.querySelector('.complete')

let tasknumber=0;
function add(){
    if(taskinput.value.trim()==""){
        span1.classList.remove("none")
        taskinput.classList.add('.invaild')
    }
    else if(taskinput.value.length<=3){
        span1.classList.add("none")
        taskinput.classList.remove('.invaild')
        span2.classList.remove("none")
       

    }
    else{
      
        emptytask.style.display="none"
        span2.classList.add("none")
        span1.classList.add("none")
        let alert=document.createElement('div')
        alert.classList.add('alert')
        
        alert.style.backgroundColor='#'+ Math.random().toString(16).slice(2,8)
        alert.append(taskinput.value)
        alert.innerHTML+=`<button  class="btn btn-danger float-end  ml-5 delete ">Delete</button>`

        alert.innerHTML+=`<input type="checkbox" class=" circle float-start    check"></input>`
        
        //alert.innerHTML+=`<i class="fa-solid fa-check float-start i "></i>`
        
        let check=document.querySelector('.check')
        alltask.appendChild(alert)
        taskinput.value=""
        tasknumber+=1
        displaycount(tasknumber)
       check1()
       check2()
      
       
      

        
       
        

      
    }

}
function checkempty(){
    if(alltask.children.length==0){
        emptytask.style.display="block"
        tasknumber=0
        displaycount(tasknumber)
        
    }
    else{
         emptytask.style.display="none"
    }
   
    
}


addtask.addEventListener('click',add)



document.addEventListener('click',function(event){
        if( event.target.classList.contains('delete')){
          
         
            if( event.target.parentElement.classList.contains('checkedparent')){
                event.target.parentElement.remove()

               }
            else{
                event.target.parentElement.remove()
                tasknumber-=1
                displaycount(tasknumber)
               }

               checkempty()
               
               
               
         
        }
        
}) 

  


document.addEventListener('click',function(event){
        if( event.target.classList.contains('check')){
            event.target.classList.toggle('checked')
            event.target.parentElement.classList.toggle('checkedparent')
           

            
            if( event.target.parentElement.classList.contains('checkedparent')){
              
                 tasknumber-=1
                 
                 
                 
               
              }

            
            else{
              tasknumber+=1
              
                
            }
           
           
        
        }
        check1()
        check2()
        
        displaycount(tasknumber)
            
      }
        
        
)
let displaycount=(taskcounts)=>{
  taskcount.innerHTML=taskcounts
}

let check1=()=>{
  

  for(let i=0;i<alltask.children.length;i++){
    if(alltask.children[i].classList.contains('checkedparent')){
      
      
      
      complete.append(alltask.children[i])
      checkempty()
      
      
     
      
      

    }
   
   
  }

}
let check2=()=>{
  

  for(let i=0;i<complete.children.length;i++){
    if(!(complete.children[i].classList.contains('checkedparent'))){
      
      
      
      alltask.append(complete.children[i])
      checkempty()
      
      
     
      
      

    }
   
   
  }

}








        
        
        

         
    

    

    

   
     
    


 
