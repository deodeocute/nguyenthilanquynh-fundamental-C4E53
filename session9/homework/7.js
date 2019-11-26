const quotee = fetch ('http://quotes.rest/qod.json')
const abc = document.getElementById("quote")

quotee
  .then(database => {
    return database.json();
  })
  .then(quotee => {
    abc.innerHTML += `<h1>${quotee.contents.quotes[0].quote}</h1>
    <ul>${quotee.contents.quotes[0].author}</ul>`
  });






