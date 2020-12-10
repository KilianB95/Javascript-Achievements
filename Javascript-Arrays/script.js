    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let woord4 = extrawoord[index];
        let woord5 = superwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4 + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Olli", "Kilian", "Anna"];
    const werkwoord = ["likes", "wants", "sees"];
    const restwoord = ["metal", "beer", "coffee"];
    const extrawoord = ["with", "in front of", "next to"];  
    const superwoord = ["a friend", "random people", " a house"];

    let plaatjes = ["https://149360821.v2.pressablecdn.com/wp-content/uploads/2019/12/No-coffee-no-workee-Baby-1.jpg", "https://nieuwspaal.nl/wp-content/uploads/darthvader-starwars.jpg", "https://am22.mediaite.com/tms/cnt/uploads/2019/12/Baby-Yoda-With-His-Little-Cup-Is-All-of-Us.jpeg", "https://images-na.ssl-images-amazon.com/images/I/41gvgrND6GL._AC_SX425_.jpg"]
    let arrayLength = onderwerp.length;
