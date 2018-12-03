$(document).ready(function () {
    var fjson = "https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN";
    $.getJSON(fjson, function (tdata) {
        var items = [];
        $.each(tdata.data, function (k, v) {
            //console.log("id: " + v.id);
            //console.log("label: " + v.label);
            /* Label ,  Description , imagePath */
            items.push("<div id='"+v.id+"' class='container-fluid mt-3 mt-5'><div class='d-flex p-3 bg-secondary text-white justify-content-between'><div class='p-2'><div class='d-flex flex-column'><div class='p-2'><h3>"+v.label+"</h3></div><div class='p-2 small'>"+v.description+"</div></div></div><div class='p-2'><img class='img-fluid rounded' src='http://"+v.imagePath+"'/></div></div></div>");
            // console.log(v.imagePath);
            /* Services */
            items.push("<div class='container mt-3 bg-secondary mt-5'><div class='d-flex p-3 text-white justify-content-between'>");
            $.each(v.Services, function (c, va) {
                //console.log(va.id_service);
                //console.log(va.label);
                //console.log(va.description_service);
                items.push("<div id='"+va.id_service+" class='p-2'><div class='d-flex flex-column'><div class='p-2 text-center font-weight-bold'>"+va.label_service+"</div><div class='p-2 font-italic font-weight-light small'>"+va.description_service+"</div></div></div>");
            });
             items.push("</div></div>");
            /* End Services */
        });
        /* push elements on HTML  */
        $("<div/>", {
            "class": "container-fluid",
            html: items.join("")
        }).appendTo("body");
    });
});
