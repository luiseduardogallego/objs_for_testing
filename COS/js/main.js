$(document).on("click", function(e){
    if(!($(e.target).is("#liril_aside") || $.contains(("#liril_aside"), $(e.target))) && $("#liril_aside").is(".visible") && !$(e.target).is("#liril")){
        $("#liril_aside").removeClass("visible")
    }
})
$("#liril").on("click", function(){
    $("#liril_aside").addClass("visible")
})
setInterval(function() {
    var currentTime = new Date ( );
    $("#easytasks .clock div:nth-child(3)").css({"rotate": `${currentTime.getHours ( ) * (360/12)}deg`})
    $("#easytasks .clock div:nth-child(2)").css({"rotate": `${currentTime.getMinutes ( ) * (360/60)}deg`})
    $("#easytasks .clock div:nth-child(1)").css({"rotate": `${currentTime.getSeconds ( ) * (360/60)}deg`})
}, 1000);
$(".task").draggable({
    stack:".task",
    cursor: "move", 
    snap: ".task",
    snapMode: "both",
    revertDuration: 100,
    handle: `.opTions`,
    snapTolerance: 8,
    /*grid: ($("#gridWidth").val() == "0" && $("#gridHeight").val() == "0") || !gridSnapping? false: [parseInt($("#gridWidth").val()), parseInt($("#gridHeight").val())],*/
    containment: "#desktop",
    revert: false,
    start: function(event, ui) {
        if(!$('.clock').last().hasClass("dropped")){ 
            ui.helper.data('dropped', false);
        }else{
            
        }
      
    },
    stop: function(event, ui)
    {
        if(!ui.helper.data('dropped')){
            /*if($("#customizationBars").hasClass("open")){
            $(this).remove()}
           */   
        }
    }
})


/**
 * <div class="ui-resizable-handle ui-resizable-nw" id="nwgrip"></div><div class="ui-resizable-handle ui-resizable-ne" id="negrip"></div><div class="ui-resizable-handle ui-resizable-sw" id="swgrip"></div><div class="ui-resizable-handle ui-resizable-se" id="segrip"></div><div class="ui-resizable-handle ui-resizable-n" id="ngrip"></div><div class="ui-resizable-handle ui-resizable-s" id="sgrip"></div><div class="ui-resizable-handle ui-resizable-e" id="egrip"></div><div class="ui-resizable-handle ui-resizable-w" id="wgrip"></div>
 */
 
widg= '<div class="ui-resizable-handle ui-resizable-nw" id="nwgrip"></div><div class="ui-resizable-handle ui-resizable-ne" id="negrip"></div><div class="ui-resizable-handle ui-resizable-sw" id="swgrip"></div><div class="ui-resizable-handle ui-resizable-se" id="segrip"></div><div class="ui-resizable-handle ui-resizable-n" id="ngrip"></div><div class="ui-resizable-handle ui-resizable-s" id="sgrip"></div><div class="ui-resizable-handle ui-resizable-e" id="egrip"></div><div class="ui-resizable-handle ui-resizable-w" id="wgrip"></div>'; 
$( ".task" ).each(function(){$(this)[0].insertAdjacentHTML("beforeend", widg); })

$(".task .opTions").on("click", function(){$(".task .opTions").not($(this)).parent().removeClass("focused"); $(this).parent().hasClass("focused")?$(this).parent().removeClass("focused"):$(this).parent().addClass("focused")})

$( ".task" ).resizable({
    handles: {
        'nw': '#nwgrip',
        'ne': '#negrip',
        'sw': '#swgrip',
        'se': '#segrip',
        'n': '#ngrip',
        'e': '#egrip',
        's': '#sgrip',
        'w': '#wgrip'
    },
    containment: "#desktop"
})
$(".task .coverDiv").on("click", function(){$(this).parent().is(".focused")?$(this).parent().removeClass("focused"):1})