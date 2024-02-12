export const BookCard = ({book, onBookClick}) => {
  return (  
  <div onClick={() => {onBookClick(book);
  }} >
    <div>
   <img src = {book.image} />
   </div>
   <div>
    {book.title}
    </div>
  </div>
  );
};
//above code is same as below
//export const BookCard = (props) => {
//  const { book } = props;
//  return <div>{book.title}</div>;
//}