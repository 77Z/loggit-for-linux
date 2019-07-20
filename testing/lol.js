function hi() {
  var hws = split("Hello, World!", ",");
  console.log(hws);
}

function split(inp, splitBy) {
  //returns array
  var out = inp.split(splitBy);
  return out;
}

hi();