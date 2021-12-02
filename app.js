const searchBut = document.getElementById("search-button");
const searchInp = document.getElementById("search-input");
const data= new Knowledge();
// const ui = new 


searchBut.addEventListener("click",()=>{
    searchWord = searchInp.value;

    data.getresponseData(searchWord)
    .then(response =>{
         getResult(response);
    })
    
})

function getResult(data){
    const content = document.getElementById("content");
    console.log(data[0].meanings.length)
    if(data[0].meanings.length<=0){
        console.log("not found");
    }
    else if(data[0].meanings.length<2){
        content.innerHTML = ` <p class="type">type :${data[0].meanings[0].partOfSpeech}</p><br>
     <p class="meaning">meaning :${data[0].meanings[0].definitions[0].definition}</p>`

    }
    else{content.innerHTML = ` <p class="type">type: ${data[0].meanings[0].partOfSpeech}</p> <br>
      <p class="meaning"><span>meaning:</span> ${data[0].meanings[0].definitions[0].definition}</p> <br>
      <p class="type">type: ${data[0].meanings[1].partOfSpeech}</p> <br>
      <p class="meaning"><span>meaning:</span> ${data[0].meanings[1].definitions[0].definition}</p>` 
    }
        
    
    
        
    //  content.innerHTML = ` <p>type :${data[0].meanings[0].partOfSpeech}</p>
    //  <p>meaning :${data[0].meanings[0].definitions[0].definition}</p>
    //  <p>type :${data[0].meanings[1].partOfSpeech}</p>
    //  <p>meaning :${data[0].meanings[1].definitions[0].definition}</p>` 
    

} 



