var term=document.getElementById("term").value;
var number=document.getElementById("number").value;
number=Number(number);
var startYear=document.getElementById("yearS").value;
var endYear=document.getElementById("yearE").value;


startYear+="0101";
endYear+="1231";
if(startYear===""){
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    
  'api-key': "aa93bd10e08449e8973f2634d823eb1c",
  'q': "dog",
  'begin_date':startYear,
  'end_date': endYear,
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);


})
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