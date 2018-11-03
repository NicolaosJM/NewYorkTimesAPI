var term=document.getElementById("term").value;
var number=document.getElementById("number").value;
number=Number(number);
var startYear=document.getElementById("Syear").value;
var endYear=document.getElementById("Eyear").value;

if(startYear===""){
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "aa93bd10e08449e8973f2634d823eb1c",
  'begin_date': startYear+"0101",
  'end_date': endYear+"1231",
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

//whatever number is, loop that many times and print out 



}).fail(function(err) {
  throw err;
});
}


else{
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "aa93bd10e08449e8973f2634d823eb1c",
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
//whatever number is, loop that many times and print out 


}).fail(function(err) {
  throw err;
});
}