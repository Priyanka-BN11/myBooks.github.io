import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
export const MainView = () => {
    const [books,setBooks] =useState([]);
    useEffect(() => {
      fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
        .then((response) => response.json())
        .then((data) => {
          const booksFromApi = data.docs.map((doc) => {
            return {
              id: doc.key,
              title: doc.title,
              image:`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
              author: doc.author_name?.[0]
            };
          });
  
          setBooks(booksFromApi);
        });
    }, []);
    const [selectedBook, setSelectedBook] = useState(null);
    if(selectedBook){
        return (
            <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
    );}

    if(books.length === 0) {
        return <div>No Books to display</div>;
    }
    return(
        <div>
          <center><h1>Book's App</h1></center>
          {books.map((book) => 
           <BookCard 
                key={book.id} 
                book={book} 
                onBookClick=
                {(newSelectedBook) => {setSelectedBook(newSelectedBook);
                }}
            />
          )}
          
        </div>
    );
};