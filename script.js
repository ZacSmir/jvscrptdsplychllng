// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

console.log(logArgs.toString())

var usethis = logArgs.toString()

function math(number){
return number + 1
}

var functionsusethis = math.toString()

var otherformattedExample = $("<pre>")

otherformattedExample.text(functionsusethis)

var functionString = "how do I get the function as a string?"



var formattedExample = $("<pre>")



formattedExample.text(usethis)

$("#functionthing").append(otherformattedExample)

$("#prething").append(formattedExample)
