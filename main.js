// 1. target the entire form


$('form').on('submit', function(e){
  e.preventDefault();
  var item = '<li>' + $('#enter').val(); +'</li>'
  $('ul').append(item);
  $('ul li').on('click', function(){
    $(this).css('text-decoration', 'line-through');
  });
  $('#enter').val("");
})

// 2. on submit of the form run a function
// 3. inside the function call on preventDefault()
// 4. create a variable where you set it equal to a list item tag with
// the value entered in the input nested inside, ie:
//
// var item = '<li>' + $('input').val(); + '</li>'
//
// 5. call on the empty unordered list and append the variable (item)
