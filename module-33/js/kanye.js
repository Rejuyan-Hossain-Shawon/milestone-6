const loadKanye = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayAQuotes(data))
};



const displayAQuotes = quote => {


    const quoteField = document.getElementById("quoteField");

    quoteField.innerText = quote.quote;
};