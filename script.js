// CONSOLE.LOG
function logArgs(args) {
  var a = 1
  console.log(args)
}

var usethis = logArgs.toString()

var formattedExample = $("<pre>")

formattedExample.text(usethis)

$("#prething").append(formattedExample)
//-------------------------
//FUNCTIONS
function math(number){
return number + 1
}

var functionsusethis = math.toString()

var otherformattedExample = $("<pre>")

otherformattedExample.text(functionsusethis)

$("#functionthing").append(otherformattedExample)

