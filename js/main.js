
(function(){
        // navbar click
        const bars = document.getElementsByClassName('bars')[0]
        const navbar = document.getElementsByClassName('top-links')[0]
        
        
        bars.addEventListener('click', function(){

                bars.classList.toggle('active')
                navbar.classList.toggle('active')
  
                
        })


        const form = document.getElementsByClassName('search-form')[0];
        let inputField = document.getElementsByClassName('search-input')[0]
        // vrednost inputa u console log
        form.addEventListener('submit', function (e) {
                e.preventDefault()
                let input = inputField.value;
                if(input === '' ){
                        alert('Please fill input field properly')
                }
                console.log(input);
                inputField.value = ''
                inputField.focus();
                
        })


        const imageWrapper = document.getElementsByClassName('image-wrapper')[1];
        const pTag = imageWrapper.getElementsByTagName( 'p');
        const container = document.getElementsByClassName('flex-4')[0]

        
        
        container.addEventListener('click' , function (e) {
        
                let clickedValue = e.target
                clickedValue = clickedValue.textContent.toLowerCase()
                console.log(clickedValue);

                let textP;

                for(let i = 0; i< pTag.length; i++) {
                        textP = pTag[i]
                        let textContentP = textP.textContent.toLowerCase();

                if(clickedValue === textContentP ) { 
                        
                        textP.classList.add('active');
                        
                } else{
                        textP.classList.remove('active')
                }
                
                removingClassOfP(textP)
                        
                } 

        
                
        })

        function removingClassOfP(pClass) { 

                imageWrapper.addEventListener('click', function () {
                        pClass.classList.remove('active')
                })
        }



})()
      

