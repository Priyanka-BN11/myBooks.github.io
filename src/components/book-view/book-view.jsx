export const BookView = ({book,onBackClick}) => {
return (
    <div>
        <div>
            <img src ={book.image}/>
        </div>
        <div>
            <span>Title: {book.title}</span>
        </div>
        <div>
            <span>Author: {book.author}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
    </div>

)
}