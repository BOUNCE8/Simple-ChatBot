

      const catchInputs = [
          ["hi", "yo", "hello", "hey"],
          ["how are you", "how are you doing"],
          ["what is up", "what is going on", "what are you doing?"],
          ["not bad", "not too bad", "i am good thanks", "great"],
          ["not great", "tired", "bored"],
          ["tell me a fact", "tell me something interesting"],
          ["thank you", "thanks", "no problem"],
          ["bye", "goodbye", "good bye", ]
      ];

      const catchOutputs = [
          ["Hello", "Hey", "Hi there!", "what's good?"],
          ["Not bad thanks, how are you doing?", "great, how are you feeling?", "Amazing, what about you?"],
          ["Not much", "So much I can't remember", "working on projects"],
          ["That's good", "Good to hear", "Great"],
          ["Sorry to hear that", "That's a shame"],
          ["People are crazy"],
          ["No problem", "Pleasure is mine", "You're welcome"],
          ["Take care", "Goodbye", "See you later"]
      ];

      const randomOutputs = [
          "Interesting",
          "I'm listening",
          "Tell me more",
          "That's Tricky",
          "Oh yeee"
      ];

      window.onload = function() {
        $('#input').focus()
      }

      // on enter press
      $("#input").on("keypress", function(e) {
        const ENTER_KEY = 13;
        const input = $("#input").val();
        if(e.keyCode === ENTER_KEY){
          if(input != "") {
            output(input);
            $('#input').val("");
          }
        }
      });
      
      // on click send
      $("#send-btn").on("click", function(e) {
          const input = $("#input").val();
          if(input != "") {
            output(input);
            $('#input').val("");
          }
      });

      //decider function
      output = (input) => {
        const currentDate = new Date()
        const time = `${formatTime(currentDate.getHours())}:${formatTime(currentDate.getMinutes())}`
        let result
        let text = input.toLowerCase()

        if (compare(catchInputs, catchOutputs, text)){
          result = compare(catchInputs, catchOutputs, text);
        } else {
          result = randomOutputs[Math.floor(Math.random() * randomOutputs.length)]
        }

        bot(result, time, scrollDown())
        user(text, time, scrollDown()) 
          
      }

      function formatTime(time) {
          return time < 10 ? (`0${time}`) : time;
      }
        
      compare = (userArray, botArray, string) => {
        let item;
        for (let a = 0; a < userArray.length; a++) {
          for (let b = 0; b < botArray.length; b++) {
            if (userArray[a][b] == string){
              items = botArray[a]
              item = items[Math.floor(Math.random() * items.length)];
            }
          }
        }
        return item;
      }

      user = (text, time) => {
          text = text.charAt(0).toUpperCase() + text.substring(1)
          $('#chat-container').append(`<div class="outerBubbleUser"><div class="textBuble user"><p>${text}</p></div><span class="timeStamp sml-margin-l"><p>${time}</p></span></div>`);
        }

      bot = (result, time) => {
        setTimeout(function(){
          $('#chat-container').append(`<div class="outerBubbleBot"><span class="timeStamp sml-margin-r"><p>${time}</p></span><div class="textBuble bot"><p>${result}</p> </div></div>`)
        }, 1000);
        }

      scrollDown = () => $('#chat-container').animate({scrollTop:1000000}, 800)
