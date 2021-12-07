let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let final = (weight / (height * height) * 10000);
  document.getElementById("output").value = final;

});

function clearInput(){
  let weight = document.getElementById("weight").value = "";
  let height = document.getElementById("height").value = "";
  let output = document.getElementById("output").value = "";
}