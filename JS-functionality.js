function changeval1() {
  var old_val = document.getElementById("farenheit").value
  var new_val = ((old_val - 32) * 5) / 9
  document.getElementById("answertemp").textContent = new_val
}

function changeval2() {
  var old_val = document.getElementById("pounds").value
  var new_val = old_val / 2.2046
  document.getElementById("answerweight").textContent = new_val
}

function changeval3() {
  var old_val = document.getElementById("miles").value
  var new_val = old_val * 1.609
  document.getElementById("answerdist").textContent = new_val
}

function changeval12() {
  var old_val = document.getElementById("farenheit").value
  var new_val = ((old_val * 9) / 5) + 32
  document.getElementById("answertemp").textContent = new_val
}

function changeval22() {
  var old_val = document.getElementById("pounds").value
  var new_val = old_val * 2.2046
  document.getElementById("answerweight").textContent = new_val
}

function changeval32() {
  var old_val = document.getElementById("miles").value
  var new_val = old_val / 1.609
  document.getElementById("answerdist").textContent = new_val
}

function reverse1() {
  var unit = document.getElementById("tunitchange")
  if (unit.textContent == "celsius") {
    unit.textContent = "farenheit"
    document.getElementById("farenheit").placeholder = "Celsius"
    document.getElementById("temp").onclick = changeval12
  } else if (unit.textContent === "farenheit") {
    unit.textContent = "celsius"
    document.getElementById("farenheit").placeholder = "Farenheit"
    document.getElementById("temp").onclick = changeval1
  }
}

function reverse2() {
  var unit = document.getElementById("wunitchange")
  if (unit.textContent == "kilograms") {
    unit.textContent = "pounds"
    document.getElementById("pounds").placeholder = "Kilograms"
    document.getElementById("weight").onclick = changeval22
  } else if (unit.textContent === "pounds") {
    unit.textContent = "kilograms"
    document.getElementById("pounds").placeholder = "Pounds"
    document.getElementById("weight").onclick = changeval2
  }
}

function reverse3() {
  var unit = document.getElementById("dunitchange")
  if (unit.textContent == "miles") {
    unit.textContent = "kilometers"
    document.getElementById("miles").placeholder = "Miles"
    document.getElementById("dist").onclick = changeval3
  } else if (unit.textContent === "kilometers") {
    unit.textContent = "miles"
    document.getElementById("miles").placeholder = "Kilometers"
    document.getElementById("dist").onclick = changeval32
  }
}
