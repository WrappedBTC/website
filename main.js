$('document').ready(function() {
  $("#mintingButton").click(function(){
    $(".how-content").removeClass("show");
    $("#mintingContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#mintingButton").addClass("selected");
  });

  $("#burningButton").click(function(){
    $(".how-content").removeClass("show");
    $("#burningContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#burningButton").addClass("selected");
  });

  $("#receiveButton").click(function(){
    $(".how-content").removeClass("show");
    $("#receiveContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#receiveButton").addClass("selected");
  });

  var togglePartnerSelect = function(infoId, stackId) {
    if($(infoId).hasClass("hidden")){
      $(".stacks").removeClass("unselected");
      $(".partner-desc").addClass("hidden");
      $(infoId).removeClass("hidden");
      $(".stack").removeClass("selected");
      $(stackId).addClass("selected");
    } else {
      $(".stacks").addClass("unselected");
      $(".partner-desc").addClass("hidden");
      $(".stack").removeClass("selected");
    }
  }

  $("#wbtcdaoInfo").click(function()  {
    togglePartnerSelect("#wbtcdaoInfo", "#stackThree");
  });

  $("#partner-join").click(function()  {
    $("#mc-embedded-subscribe-form").attr("action", "https://bitgo.us19.list-manage.com/subscribe/post?u=7ff4a7177706c9d17f9e67de2&amp;id=9e8945b50a");
    $("#exampleModalLabel").html("Join the WBTC network");
    $("#mc-embedded-subscribe").val("Join");
    $("#textarea-header").html("Comments");
  });

  $("#example-button").click(function()  {
    $("#mc-embedded-subscribe-form").attr("action", "https://bitgo.us19.list-manage.com/subscribe/post?u=7ff4a7177706c9d17f9e67de2&amp;id=44975c3c5b");
    $("#exampleModalLabel").html("Get more info on WBTC");
    $("#mc-embedded-subscribe").val("Keep me Informed");
    $("#textarea-header").html("Have a question?");
  });

  $("#stackThree").click(function()  {
    togglePartnerSelect("#wbtcdaoInfo", "#stackThree");
  });

  $("#merchantsInfo").click(function()  {
    togglePartnerSelect("#merchantsInfo", "#stackTwo");
  });
  $("#stackTwo").click(function()  {
    togglePartnerSelect("#merchantsInfo", "#stackTwo");
  });

  $("#custodiansInfo").click(function()  {
    togglePartnerSelect("#custodiansInfo", "#stackOne");
  });
  $("#stackOne").click(function()  {
    togglePartnerSelect("#custodiansInfo", "#stackOne");
  });


  var scrollTo = function($element) {
    $('html,body').animate({scrollTop: $element.offset().top},'slow');
  };

  $("#whyButton").click(function() {
    scrollTo($('#whySection'));
  });

  $("#whatIsButton").click(function() {
    scrollTo($('#whatSection'));
  })
});
