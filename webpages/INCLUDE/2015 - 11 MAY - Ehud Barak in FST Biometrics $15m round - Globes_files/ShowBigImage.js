    var ShowBigImage_scrolled_down = "0px";
var zoom_img_symbol = "http://images.globes.co.il/images/images/zoom_image_01.png";
function image_wizard(img_url, alt_text) {
    $("html body").css("overflow", "");
    $("html body").addClass("ShowBigImageWizard");
    $("body").append("<div class='gray_wizard_div'></div>");
    $("body").append("<div id='container_image_wizard'></div>");
    
    $('#container_image_wizard').css("top", ShowBigImage_scrolled_down);
    $("#container_image_wizard").append("<img id='image_wizard_main' src='" + img_url + "'/>");

    $("#image_wizard_main").wrap("<div id='div_img_zoom_wrap' />");

    $("#image_wizard_main").before("<img id='image_wizard_close_btn' src='http://images.globes.co.il/images/Site2/wizard/Icon_Close_v3.png'/>");

    $("#div_img_zoom_wrap").append("<span>" + alt_text + "</span>");

    $('#image_wizard_main').load(function () {

        var zoom_img_width = $("#image_wizard_main").width();
        var zoom_img_height = $("#image_wizard_main").height();
        if (zoom_img_height > 700) {
            $("#image_wizard_main").wrap("<div id='wrap_main_img_with_scroll' />");
            $("#div_img_zoom_wrap").width(zoom_img_width+20);
        }
        else
            $("#div_img_zoom_wrap").width(zoom_img_width);




        // close button
        $("#image_wizard_close_btn").click(function () {
            FN_CloseImageWizard();
        });

        $("#container_image_wizard").click(function () {
            FN_CloseImageWizard();
        });

        function FN_CloseImageWizard() {
            $(".gray_wizard_div").remove();
            $("#container_image_wizard").remove();
            $("html body").removeClass("ShowBigImageWizard");
        }

    })

   

    
}

// manage zoom icon on the image
$(document).ready(function () {

    $("#ArticleRightColumn img[src*='-g-']").css("cursor", "pointer");

    $("#ArticleRightColumn img[src*='-g-']").mouseenter(function () {
        if ($(this).parent().attr("class") != "zoom_img_link") {
            $(this).wrap("<div class='zoom_img_link'/>");
            $(this).parent().append("<img class='zoom_img' src='" + zoom_img_symbol + "' />");
            var mainImageOBJ = $(this);
            $(this).parent().children(".zoom_img").show();
            $(this).parent().children(".zoom_img").click(function () {
                FN_ShowBigImage(mainImageOBJ);
            });
        }
        else
            $(this).parent().children(".zoom_img").show();
    });

        $("#ArticleRightColumn img[src*='-g-']").mouseout(function () {
            $(this).parent().children(".zoom_img").delay(800).animate({ opacity: 'hide' }, 30);
        });

    $("#ArticleRightColumn img[src*='-g-']").click(function () {
        FN_ShowBigImage($(this));
    });

    function FN_ShowBigImage(obj) {
        ShowBigImage_scrolled_down = $(document).scrollTop() + "px";
        var alt_text = obj.attr("alt");
        var src_small_Image = obj.attr("src");
        var src_array = new Array();
        src_array = src_small_Image.split("/");
        var src_img_name = src_array[7].split("-");
        src_img_name[4] = src_img_name[4].split(".")[1];
        var new_src = "http://images.globes.co.il/images/NewGlobes/Originals/" + src_array[6] + "/" + src_img_name[2] + "." + src_img_name[4];

        image_wizard(new_src, alt_text);

    }
});