import "./Books.css"


 const Books = ()=>{
    return (
      <div className="book">
        <img
          className="book_img"
          src="https://picsum.photos/200/300?random=2"
          alt=""
        />
        <div className="book_desc">
          <h2>Atomic Hebits</h2>
          <p>James Clear</p>
        </div>
      </div>
    );
 }
 export default Books;