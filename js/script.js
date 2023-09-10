//Function Section Start

//Function Section End

//Data JSON Function Section Start
var dataBookJSON = {
    "book": {
        "title": "A Things About You",
        "date": new Date("2023-09-10T11:23:00"),
        "pages": "",
        "image": "./img/a-things-about-you.jpg",
        "link": "./pages/a-things-about-you.html"
    }
};

var judulBuku = document.getElementById('book-title');
var judulBukuJSON = dataBookJSON.book.title;
judulBuku.textContent = judulBukuJSON;

var gambarBuku = document.getElementById('book-image');
var gambarBukuJSON = dataBookJSON.book.image;
gambarBuku.src = gambarBukuJSON;

var linkBukuJSON = dataBookJSON.book.link;


//Data JSON Function Section End

//Click Card Function Section Start
const clickCard = () => {
    const link = linkBukuJSON;
    const bookCard = document.getElementById('book-card');
    bookCard.addEventListener('click', function() {
        window.location.href=link
    })
}
clickCard();
//Click Card Function Section End

//Date Created Function Section Start
function formatDate(date) {
    var yyyy = date.getFullYear();
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var dd = String(date.getDate()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
}

const dateNote = () => {}
var currentDate = new Date();
var creationDate = dataBookJSON.book.date;
var timeDiff = (currentDate - creationDate) / 1000;
var hoursAgo = Math.floor(timeDiff / 3600);
var dateElement = document.getElementById('date-created');

if (hoursAgo < 1) {
    dateElement.textContent = 'Created less than an hour ago';
} else if (hoursAgo === 1) {
    dateElement.textContent = 'Created 1 hour ago';
} else if (hoursAgo < 24) {
    dateElement.textContent = `${hoursAgo} hours ago`;
} else {
    dateElement.textContent = `${Math.trunc(hoursAgo / 24)} days ago`;
}
//Date Created Function Section End