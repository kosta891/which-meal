(function(){
const form = document.getElementsByClassName('search-form')[0];

let inputField = document.getElementsByClassName('search-input')[0]

form.addEventListener('submit', function (e) {
        e.preventDefault()
        let input = inputField.value;
        inputField.value = ''
        inputField.focus();
        
})





// 



const imageWrapper = document.getElementsByClassName('image-wrapper')[1];
const img = imageWrapper.getElementsByTagName('img')[0]
const mapLocation = imageWrapper.getElementsByClassName('map-location ')
const pTag = imageWrapper.getElementsByTagName( 'p');
console.log(img);


const container = document.getElementsByClassName('flex-4')[0]

let locationText = container.getElementsByClassName('location-text')

// kako da ubacim for petrlju za sve hover textove


container.addEventListener('click' , function (e) {
       
        let clickedValue = e.target
        clickedValue = clickedValue.textContent.toLowerCase()
        console.log(clickedValue);

        let textP;

        for(let i = 0; i< pTag.length; i++) {
                textP = pTag[i]
                let textContentP = textP.textContent.toLowerCase();

               if(clickedValue === textContentP ) { //videti za input da se prikaze
                       
                       textP.classList.add('active');
                       console.log();
                } else{
                        textP.classList.remove('active')
                }
              
                
                
        } 

      /*   imageWrapper.addEventListener('click', function(){
                textP.classList.remove('active')
        }); */
        
})




})()
      

  

