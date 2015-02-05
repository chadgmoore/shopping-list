$(document).ready(function() {

	$('ul').on('click', 'li:nth-child(odd)', function(event){
  		$(this).toggleClass('checked');
  		$('ul').append(this)
  		$(this).css('background-color','#2B3244')
  		$(this).css('color','#fff')
  		$(this).css('font-style', 'italic')  		

})

	$('ul').on('click', 'li:nth-child(even)', function(event){
  		$(this).toggleClass('checked');
  		$('ul').append(this)
  		$(this).css('background-color','#2B3244')
  		$(this).css('color','#fff') 
  		$(this).css('font-style', 'italic')

})


  $('.input').keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      var newItem = document.getElementsByName('newItem')[0];
      // alert(newItem.value);
      $('#listId').prepend('<li id="listId">' + newItem.value + '<button class="deleteButton"> <i class="fa fa-close fa-1x"></i></button></li>');
    }
})


  $(".deleteButton").click(function(){
    $(this).parent('li').remove();    
  })

});