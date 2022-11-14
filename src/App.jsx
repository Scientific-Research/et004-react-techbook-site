import "./App.scss";
import techbooks from "./data/techbooks.json";

console.log(techbooks);
function App() {
  return (
    <div className="App">
      <h1>There are {techbooks.length} Tech Books</h1>
      <div className="books">
        {/* <p>{techbooks.map((item) => item.title)}</p> */}
        {/* <ul>
          {techbooks.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul> */}

        {techbooks.map((item) => {
          return (
            <div className="book">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
