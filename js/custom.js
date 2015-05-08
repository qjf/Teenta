//mobiscroll
$(document).on("pageinit", function(event) {
    // Select demo initialization
    $('#demo_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500

      });
    $('#location_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('#checkin_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('#value_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('#radius_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('#reminder_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('#safety_select').mobiscroll().select({
        mode: "scroller", // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
        display: "inline", // Specify display mode like: display: 'bottom' or omit setting to use default 
        inputClass: "mobiscroller_input",
        minWidth: 500
      });
    $('.mobiscroller_input').each(function() {
      $(this).prev().hide();
    });
  });