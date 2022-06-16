import './App.css';
import Test2 from "./components/test2"


function App() {
   const expenses = [
     {
       title: "Dasturlash kurslari",
       amount: 35,
       date: new Date(2022, 4, 27),
     },
     {
       title: "Komunal harajatlar",
       amount: 5,
       date: new Date(2022, 4, 27),
     },
     {
       title: "Yo'l kira",
       amount: 8,
       date: new Date(2022, 4, 27),
     },
     {
       title: "Ijara",
       amount: 70,
       date: new Date(2022, 4, 27),
     },
     {
       title: "Kiyim kechak",
       amount: 100,
       date: new Date(2022, 4, 27),
     },
   ];

  return (
    <div className="App">
      <h2>HelLo World</h2>
      <Test2
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Test2
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Test2
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Test2
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <Test2
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}

export default App;
