function sentMessage() {

    $.ajax({
      url: "http://127.0.0.1:5500/" + $("#name").val(),
      success: function(result) {
        alert("Mail sent successfully");
  
      },
      error: function(error) {
        alert("There is some problem with mail");
      }
    });
    return false;
  
  }
