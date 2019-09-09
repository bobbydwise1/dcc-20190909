/*
 This problem was asked by Google.

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?
*/




$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input1 = JSON.parse(input1)
    console.log(input1)
    input2 = $('#input-2').val()
    console.log(input2)
    $('#output-1').text(JSON.stringify(finder(input1,input2)))
  })

});
