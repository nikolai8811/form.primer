
 


const $form = document.querySelector('[data-form]')


 $form.addEventListener('submit',formSend )

 async function formSend (e) { 
   e.preventDefault()
   const formDate = new FormData($form)
         
   let error = formValidate($form)
   
         
         if(error===0){

         respons(formDate)
        

            $form.reset()
         }   
         else {alert ('Заполните поля')}
   
}

 function formValidate(){
  
    let error = 0
    let $formReq = document.querySelectorAll('.req')
    
    $formReq.forEach ((input)=>{
      
      
      funcRemoveError(input)
      if(input.classList.contains('phone')){
        
         if(telTest(input)){
            funcAddError(input)
            error++
         }
      }
      else if (input.classList.contains('names')){
         if(input.value===''){
            funcAddError(input)
            error++

          }
      }
   })
   return error
}
 function funcAddError(input){
input.classList.add('error')
 }
 function funcRemoveError(input){
    input.classList.remove('error')
 }
 function telTest(input){
    return !/^\+?[78]\d{10}/.test(input.value)
 }
 function nameTest(input){
   return !/\b\D{2,10}\b/i.test(input.value)
 }


 async function respons (formDate) {
   const responseEnd = []
   const FormDateObj = Object.fromEntries(formDate)

   let idRandom = function() {

      return Math.random().toString(36).substring(2)
    }
    let id={}
     id.id=idRandom()
    
    
    let res =  await  fetch ('https://api.db-ip.com/v2/free/self')
        let data = await  res.json()
   
 responseEnd.splice(-1,0,id,{name:FormDateObj.name},{phone:FormDateObj.phone},{ip:data.ipAddress},{iso:data.countryCode})
     console.log(responseEnd)

//    const fetchRespons = await fetch('',
//    {method: 'POST',
//    body:'formDate'
//    } )
//    if (!response.ok){
//    let result = await response.json()
//    alert(result.message)
   

//    }
//    else{alert('Ошибка')

//    }

// 
}
