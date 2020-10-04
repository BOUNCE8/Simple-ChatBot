$("#input").on("keypress", function(e){
    const ENTER_KEY = 13;
    
    if(e.keyCode === ENTER_KEY){
      let message = $("#input").val();
      $('#chat-container').append($("#input").val());
    }
  })














