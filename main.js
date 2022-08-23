// Defining text characters for the empty and full hearts for you to use later.
//const EMPTY_HEART = '♡'
//const FULL_HEART = '♥'

// Your JavaScript code goes here!
//const articleHearts = document.querySelectorAll(".like-glyph");

//function likeCallback(e) {
  //const heart = e.target;
  //mimicServerCall()
  
  //.then(function(){
    //if(heart.textContent === EMPTY_HEART){
    //heart.textContent = FULL_HEART;
    //heart.className = "activated-heart";
  //}else {
    //heart.textContent = EMPTY_HEART;
    //heart.className = "";
  //};
     
  //})

    //.catch(function(error) {
      //const modal = document.getElementsById("modal")
      //modal.className = "";
      //modal.textContent=error;
      //setTimeout(() =>  modal.className = "hidden", 3000);
    //});
//} 
 //for (const glyph of articleHearts) {
  //glyph.addEventListener("click", likeCallback);
 //}

 const EMPTY_HEART = '♡'
 const FULL_HEART = '♥'
 
 //
 const heartResponce = document.querySelectorAll(".like-glyph");

function likefunc(event) {
  const likeHeart = event.target;
  mimicServerCall()
    .then(() => {
      if ( likeHeart.innerText === EMPTY_HEART) {
        likeHeart.innerText = FULL_HEART;
        likeHeart.className = "activated-heart";
      } else {
        likeHeart.innerText = EMPTY_HEART;
        likeHeart.className = "";
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const glyphlike of heartResponce) {
  glyphlike.addEventListener("click", likefunc);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
   setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
