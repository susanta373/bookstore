bookstore
=========

Project for trainings

To start the server

$ node server/main

REST API examples:

$curl localhost:3000/api/books/38
$curl -X PUT -H "Content-Type: application/json" -d @book.json localhost:3000/api/books/38