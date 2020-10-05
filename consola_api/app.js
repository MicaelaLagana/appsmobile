const request = require('request');

const options = {
    url: 'https://openlibrary.org/works/'
};

function getBook(bookID, format) {
     options.url += bookID + format;
     return new Promise((resolve, reject) => {
        request(options.url, (error, response) => {
          if (error || !response) reject(error);
          resolve(response);
        });
    });
}

function main() {
    getBook("OL7353617M", ".json").then((error, book) => {
        if (error) return console.log("no se encontro el libro");
        console.log("Titulo: "  + book.title + ", Autor: " + book.subject_people[3] + ", Descripcion: " + book.description.value);
    })
}

main();
