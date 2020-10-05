const request = require('request');

const options = {
    url: 'https://openlibrary.org/works/'
};

function getBook(bookID, format) {
    options.url += bookID + format;
    return new Promise((resolve, reject) => {
       request(options.url, (error, response) => {
           if (error || response.statusCode != 200) {
               reject(error);
           } else {
               resolve(JSON.parse(response.body));
           }
       });
   });
}

function main() {
    getBook("OL45883W", ".json").then(book => {
        console.log("Titulo: "  + book.title + ", Autor: " + book.subject_people[3] + ", Descripcion: " + book.description.value);
    }).catch(() => {
        console.log("no se encontro el libro");
    })
}

main();
