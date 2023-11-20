
var allProducts = document.querySelectorAll(".card")
    var div1 = document.querySelector("#myModal")
    var btn1 = document.querySelector(".bttt")
    var btn2 = document.querySelector(".btt2")
  



    allProducts.forEach(function (item) {
        item.onclick = function (){
           

            if (div1.innerHTML != ""){
                btn1.style.display = "block"

                
div2.innerHTML=+(div2.textContent)+ totalPrice
            }
   
        }
    })

    
    btn1.onclick = function (){
  div1.style.display = "block"
    }
 

    btn2.onclick = function (){
        div1.style.display = "none"
          }
       
         