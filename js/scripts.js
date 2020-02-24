$(document).ready(function(){
    $(".con").click(function(){
        $(this).hide();
        $(".pin").show();
        });
        $(".pin").click(function(){
            $(this).hide();
            $(".con").show();
            });
    });

 $(document).ready(function(){
        $(".dev").click(function(){
            $(this).hide();
            $(".dev-p").show();
            });
            $(".dev-p").click(function(){
                $(this).hide();
                $(".dev").show();
                });
        });
 $(document).ready(function(){
            $(".dev").click(function(){
                $(this).hide();
                $(".dev-p").show();
                });
                $(".dev-p").click(function(){
                    $(this).hide();
                    $(".dev").show();
                    });
            });
$(document).ready(function(){
            $(".prod-man").click(function(){
                $(this).hide();
                $(".prod-man-p").show();
                });
                $(".prod-man-p").click(function(){
                $(this).hide();
                $(".prod-man").show();
                });
                });

                function submission() {

                    var name = document.getElementById("your-name").value;
                    var email = document.getElementById("your-email").value;
                    var text = document.getElementById("your-text").value;
                
                    if (name === "") {
                        alert("Please fill in your name");
                        return false;
                
                    } else if (email === "") {
                        alert("Please insert your email!");
                        return false;
                
                    } else if (text === "") {
                
                        alert("There is no text to submit!");
                    } else {
                
                        alert("We have recieved your message dear " + name + " and we will get back to you");
                
                
                    };
                }

                $(document).ready(function(){
                    $(".col-md-3").hover(function(){
                      $(this).css("opacity", "0.5");
                      $(this).find(".imag1-par").show();
                      }, function(){
                      $(this).css("opacity", "1");
                      $(this).find(".imag1-par").hide();
                    });
                  });
