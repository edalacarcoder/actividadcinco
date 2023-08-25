// VALIDACIÓN DE FORMULARIO DE SUSCRIPCIÓN

let btn;

window.onload = ()=>{

    btn = document.getElementById("btn_suscripcion");

    btn.addEventListener("click", enviar);

    function enviar(event){
  
        frm = document.getElementById("formulario");
        
          if(frm.checkValidity()){
            
            let nombre = document.getElementById("name-form02-0");
            
            nombre.value = "";

            let mail = document.getElementById("email-form02-0");
            
            mail.value = "";


            let phone = document.getElementById("phone-form02-0");
            
            phone.value = "";

            alert("¡Gracias por suscribirte! Pronto comenzarás cada mes a disfrutar de nuestro boletin 3A Global!");
            
            event.preventDefault(); 
            
          } else{

            alert("Error!\n Diligencie correctamente y por completo!\n El formulario debe dilicenciarse correctamente y por completo.\n El campo nombre solo admite letras.\n El campo Email debe contener la letra arroba y un dominio válido.\n El campo teléfono solo admite números.\n El formulario NO admite carecteres especiales salvo el _\n Ánimo, inténtalo de nuevo!"); 

          }

    }

}



// Comentarios

// alert("Prueba de Validación!"); return;
