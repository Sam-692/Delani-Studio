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

                $(document).ready(function() {
                    $("#main").mouseenter(function() {
                               $("#overlay").show();
                    });
                    $("#main").mouseleave(function() {
                               $("#overlay").hide();
                    });
                });
