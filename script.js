// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

function math(number){
return number + 1
}

var usethis = logArgs.toString()

var functionsusethis = math.toString()

var otherformattedExample = $("<pre>")

var formattedExample = $("<pre>")

otherformattedExample.text(functionsusethis)

formattedExample.text(usethis)

$("#functionthing").append(otherformattedExample)

$("#prething").append(formattedExample)
