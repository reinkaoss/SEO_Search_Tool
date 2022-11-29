comps = [ {
  id: "EY",
  London: "6 More London Pl, London SE1 2AF", 
  Birmingham: "1 Colmore Circus Queensway, Birmingham B4 6AJ" }, 
  {
  id: "Aldi",
  Birmingham: "Holly Ln Atherstone Birmingham CV9 2SQ",
  London: "Holly Ln, Atherstone CV9 2SQ, United Kingdom", 
},
{
  id: "BMW",
  London: "Park Lane, BMW Park Lane Ltd, 70 Park Ln, London W1K 7TT",
  Solihull: "Blythe Valley Park, Rybrook Specialist Technical Centre, Platinum, Central Blvd, Solihull B90 8AS", 
},
];

function findComp(){
  x = document.getElementById("input").value
var find = comps.find(item => item.id == x);
for(var i=0; i < comps.length; i++)
  if(find != undefined)
  document.getElementById("x").innerHTML = JSON.stringify(find,null,"\n", 2);
  else 
  document.getElementById("x").innerHTML = "Company not found";
console.log(find)
return;
}

// Copy content to clipboard
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("x");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


console.log(Object.entries(comps[1]))
console.log(JSON.stringify(comps[1]))
