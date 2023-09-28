

const {createApp} = Vue;

createApp({
  data(){
    return{
      images : [

        {
          image: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }



      ]
    }
  },

  mounted(){
    console.log('WEEEEE VEU CE STA');
  }
}).mount('#app')









const picturesContainer = document.querySelector('.pictures-container');

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

const btnTop = document.querySelector('.top');
const btnBot = document.querySelector('.bot');
const btnSwitch = document.querySelector('.reverse-btn');

let counterImg = 0;

listPrinter();

const itemsCollection = document.getElementsByClassName('item');
const maskCollection = document.getElementsByClassName('mask');
const smallImgCollection = document.getElementsByClassName('img-small');
const textCollection = document.getElementsByClassName('cstm-text');

showNext(); 

//BOTTONE BOTTOM/////////////////////////////////////////////
btnBot.addEventListener('click', forwardCycle); 

////////////////////////////////////////////////////////////

//BOTTONE TOP //////////////////////////////////////////////

btnTop.addEventListener('click', reverseCycle);

////////////////////////////////////////////////////////////

//BOTTONE SWITCH ////////////////////////////////////////////

switchOnOff = true;

btnSwitch.addEventListener('click', function(){
  if(switchOnOff === true){
    switchOnOff = false;
  }else{
    switchOnOff = true;
  }
})



//FUNZIONI////////


/**
 * Mostra/nasconde o evidenzia/disevidenzia un elemento con il comando apposito.
 * @param {elementToShow} what 
 * @param {show/hide/active/inactive} show 
 */
function toggler(what, show){

  let pippo = show;
  
  if(pippo === 'show'){
    what.classList.remove('d-none');
  }else if(pippo === 'hide'){
    what.classList.add('d-none');
  }else if(pippo === 'active'){
    what.classList.add('selected')
  }else if(pippo === 'inactive'){
    what.classList.remove('selected')
  }else{
    console.log('ERROR ERROR insert show or hide')
  };

}
 
/**
 * stampa tutti gli elementi di una lista all'interno di un div
 * @param {whereToPrintInside} whereToPrint 
 * @param {nameOfTheListToPrint} arrayName 
 */
function listPrinter(){

  images.forEach((immagine)=>{
   
    picturesContainer.innerHTML += ` <img src="${immagine.image}" class="item d-none" alt="">
    <div class="cstm-text d-none text-container">
      <h1>${immagine.title}</h1>
      <p>${immagine.text}</p>
    </div>`

  })

}   

function hidePrev(){
  toggler(itemsCollection[counterImg], 'hide');
  toggler(smallImgCollection[counterImg], 'inactive');
  toggler(maskCollection[counterImg], 'show');
  toggler(textCollection[counterImg], 'hide')
}

function showNext(){
  toggler(itemsCollection[counterImg], 'show');
  toggler(smallImgCollection[counterImg], 'active');
  toggler(maskCollection[counterImg], 'hide'); 
  toggler(textCollection[counterImg], 'show')
} 

function forwardCycle(){
  if(counterImg === images.length - 1){
  
    hidePrev();
    
    counterImg = 0;
    
    showNext();    
      
    }else{
    
    hidePrev(); 
    
    counterImg ++;
  
    showNext();  

    }
}

function reverseCycle(){
  if(counterImg === 0){
  
    hidePrev(); 
  
    counterImg = 4;
    
    showNext();  
      
    }else{
    
    btnBot.classList.remove('d-none');
    
    hidePrev(); 
    
    counterImg--;
  
    showNext(); 
   
    }
}

const interval = defaultScrolling();
const reverseInterval = reverseScrolling();


function defaultScrolling(){
  
  setInterval(function(){
    
    if(switchOnOff === false){
      clearInterval(interval);
    }else{
      forwardCycle();
    }
  }, 4000)
}

function reverseScrolling(){
  
  setInterval(function(){

    if(switchOnOff === true){
      clearInterval(reverseInterval)
    }else{
     reverseCycle();
    }
  }, 4000)
  
  
}

