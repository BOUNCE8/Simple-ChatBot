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
          ["hello", "hey", "hi there!", "what's good?"],
          ["not bad thanks, how are you doing?", "great, how are you feeling?", "amazing, what about you?"],
          ["not much", "so much I can't remember", "working on projects"],
          ["that's good", "good to hear", "great"],
          ["sorry to hear that", "that's a shame"],
          ["people are crazy"],
          ["no problem", "pleasure is mine", "you're welcome"],
          ["take care", "goodbye", "see you later"]
      ];

      const randomOutputs = [
          "interesting...",
          "i'm listening",
          "tell me more",
          "that's tricky",
          "oh yeah?"
      ];

      window.onload = function() {
        $('#input').focus()
      }

      // on enter press
      $("#input").on("keypress", function(e) {
        const ENTER_KEY = 13;
        const $input = $("#input").val();
        if(e.keyCode === ENTER_KEY){
          if($input != "") {
            output($input);
            $('#input').val("");
          }
        }
      });
      
      // on click send
      $("#send-btn").on("click", function(e) {
          const $input = $("#input").val();
          if($input != "") {
            output($input);
            $('#input').val("");
          }
      });

      //compares user input to 'catchInput' array, if it finds a match then run compare function. If not return 'randomOutputs' 
      output = ($input) => {
        const currentDate = new Date()
        const $time = `${formatTime(currentDate.getHours())}:${formatTime(currentDate.getMinutes())}`
        let result
        let $text = $input.toLowerCase().replace(/[^\d\w\s]/gi, "");

        if (compare(catchInputs, catchOutputs, $text)){
          result = compare(catchInputs, catchOutputs, $text);
        } else {
          result = randomOutputs[Math.floor(Math.random() * randomOutputs.length)]
        }

        bot(result, $time, scrollDown())
        user($input, $time, scrollDown()) 
          
      }

      function formatTime($time) {
          return $time < 10 ? (`0${$time}`) : $time;
      }
      
      // takes the matched user input then returns a response from the 'botArray' array with the same initial index of the 'userArray' then returns a random response from that array (botArray[0-?][random])
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

      user = ($input, $time) => {
          $input = $input.charAt(0).toUpperCase() + $input.substring(1)
          $('#chat-container').append(`<div class="outerBubbleUser"><div class="textBuble user"><p>${$input}</p></div><span class="timeStamp sml-margin-l"><p>${$time}</p></span></div>`);
        }

      bot = (result, $time) => {
        result = result.charAt(0).toUpperCase() + result.substring(1)
        setTimeout(function(){
          $('#chat-container').append(`<div class="outerBubbleBot"><span class="timeStamp sml-margin-r"><p>${$time}</p></span><div class="textBuble bot"><p>${result}</p> </div></div>`)
        }, 1000);
        }

      scrollDown = () => $('#chat-container').animate({scrollTop:100000}, 800)
