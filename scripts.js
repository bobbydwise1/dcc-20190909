/*
 This problem was asked by Google.

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?
*/

/*

1.  Get a list of the files for the source computer.  The required information are the file names and file last modified dates.

2.  Get a list of files from the destination computer.

3.  Compare the two lists for mismatches.
  A.  Source computer:
    I.  New files:
      a.  If a file exists on the source, but not the destination, upload the file to the destination.
      b.  Do vice-versa for the destination.
    II.  Files existing on both source and destination: Out of Date files:
      a.  If a source file is a later date than a destination file, overwrite the destination file with the source's file.
      b.  Do vice-versa for the destination.

*/

// $(document).ready(function() {

//   $('#form1').submit(function(){
//     event.preventDefault()
//     input1 = $('#input-1').val()
//     input1 = input1.replace(/\'/g,'"')
//     // input1 = JSON.parse(input1)
//     console.log(input1)
//     console.log(JSON.stringify(input1))
//     input2 = $('#input-2').val()
//     console.log(input2)
//     $('#output-1').text(input1)
//   })

// });
