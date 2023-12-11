


const $form = document.querySelector('[data-form]')

 $form.addEventListener('submit',formSend )

 async function formSend (e) {
e.preventDefault()

let error = formValidate($form)
const formDate = new formDate($form)
if(error===0){
   response = await fetch('',
    {method: 'POST',
   body:'formDate'
   } )
   if(response.ok){
      let result = await response.json()
      alert(result.message)
      $form.reset()

   }
   else{'Ошибка'

   }

}
else{alert('Заполните обязательные поля !')
}
 }

 function formValidate(){
  
    let error = 0
    let $formReq = document.querySelectorAll('.req')
    
    for(let index = 0; index<$formReq.length;index++){
      const input =  $formReq[index]
      
      funcRemoveError(input)
      if(input.classList.contains('tel')){
        
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
 }
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
 const randomId = function(length = 6) {
   return Math.random().toString(36).substring(2, length+2);
 };