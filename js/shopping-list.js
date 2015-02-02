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

	$('item').on('click', 'div.deleteItem', function(event){
  		$(this).remove();

})

	function addItem(item) {
		$('<li><span class="item">' + newItem + '</span><div class="deleteItem"> <i class="fa fa-close fa-1x"></i></div></li>').prepend('.listUl');
	}

//Add Item
//get dialog box use .append() to add to the top of the list

//DONE//checkoff
///on click, strikethrough and move to bottom, set background-color: #2B3244; color: #fff;


//delete
///on click of X, remove from list (delete)


});