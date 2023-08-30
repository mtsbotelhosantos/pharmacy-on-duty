//FUNCTION CANVA GENERATOR
function createCanva(){
    
    const elm = document.querySelector('.container')
    const shure = confirm("CTZ Q QUER SALVAR?")    

    
        html2canvas(elm,{scale: 3}).then(function(canvas) {
            document.querySelector(".result").append(canvas)
          
          if (shure == true){
           
                let cvs  = document.querySelector("canvas")
                let a = document.querySelector(".download")
                a.href=cvs.toDataURL("")
                a.download="plantao.png"
                a.click()

          }else{
                alert("Ok, download cancelado!")
          }
            
           
           
    });
 
    
}
//END CANVA GENERATOR

// FUNCTIO POPULAR OPTIONS

function addSelect(id){
    const select = document.getElementById(id)



    for (let i = 0; i <= 31; i++) {
        const data1 = i.toString().padStart(2, '0'); 
    
    
    const options = document.createElement('option');
    options.value = data1; 
    options.textContent = data1; 
    
    select.appendChild(options);
    }
}
addSelect('select')
addSelect('select2')

//END POPULAR OPTIONS

//FUNCTION MIRROR DATE
function mirrorValue(selectId, mirrorId) {
    const selectElement = document.getElementById(selectId);
    const mirrorElement = document.getElementById(mirrorId);
  
    selectElement.addEventListener('change', function() {
      const selectedValue = selectElement.value;
      mirrorElement.textContent = selectedValue;
      
      
    });
    
  }

  mirrorValue('select', 'espelho');
  mirrorValue('select2', 'espelho2');

// END MIRROR DATE


const inputElement = document.getElementById('textInput');
const mirrorElement = document.getElementById('espelhoInput');

inputElement.addEventListener('input', function() {
  const inputValue = inputElement.value;
  mirrorElement.textContent = inputValue;
});


//FUNCTION CHANGE IMAGE
function trocarImagem(novaSrc) {
    const imagemElement = document.getElementById('image');
    imagemElement.src = novaSrc;
    
}
