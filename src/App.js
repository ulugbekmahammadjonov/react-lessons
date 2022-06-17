import './App.css';
import Books from './components/Books';


function App() {
    const firstBook = [
      {
       
        img: "https://loremflickr.com/320/241",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
    
        img: "https://loremflickr.com/320/242",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
       
        img: "https://loremflickr.com/320/243",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
      
        img: "https://loremflickr.com/320/244",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
       
        img: "https://loremflickr.com/320/245",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
        img: "https://loremflickr.com/320/246",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
        img: "https://loremflickr.com/320/247",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
        img: "https://loremflickr.com/320/248",
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
        img: "https://loremflickr.com/320/249",
        title: "Atomic Habits",
        author: "James Clear",
      },
    ];
  return (
    <div className="App">
      <div className='book_wrapper'>
        {firstBook.map((book, index) => {
          return (
            <Books
              img={book.img}
              title={book.title}
              author={book.author}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
