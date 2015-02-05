$(document).ready(function() {

  //Checkoff
  $('#list').on('click', 'li.listitem', function(event){
    $(this).slideUp('slow', function(){
        $(this).slideDown('slow').appendTo('#list');
        $(this).css('background-color', '#2B3244');
        $(this).css('color', '#4C555A')
        $('.item').css('color', "#4C555A");
      })
  })
    
  //add item
  $('.input').keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      var newItem = document.getElementsByName('newItem')[0];
      // $('.listUl').prepend('<li id="listId">' + newItem.value + '<button class="deleteButton"> <i class="fa fa-close fa-1x"></i></button></li>');
      $('#list').prepend('<li class="listitem"><span class="item">' + newItem.value + '</span><div class="delete"><i class="fa fa-close fa-3x"></i></div></li>').slideDown('slow');
      document.getElementById("itemEntry").reset();
    }
})

  //delete item
  $(".delete").click(function(){
    $(this).parent('li').remove();
  })

});

