// CONSOLE.LOG
function consolelogging() {
  console.log(args)
}

var usethis = consolelogging.toString()

var formattedExample = $("<pre>")

formattedExample.text(usethis)

$("#prething").append(formattedExample)
//----------------------------------------
//FUNCTIONS
function math(number){
  return number + 1
}

var functionsusethis = math.toString()

var otherformattedExample = $("<pre>")

otherformattedExample.text(functionsusethis)

$("#functionthing").append(otherformattedExample)
//----------------------------------------
//Function(Function)
//function otherfunction(){
//return "a key was pressed"
//}
//$("#stuff").keydown(otherfunction(e){ })
//----------------------------------------
//Jquery
$("#divID").val() //is a Jquery command that allows for 