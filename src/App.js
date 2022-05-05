import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./component/NewComponent";

function App() {
  return (
    <div className="App">
      <NewComponent
        firstName="Reza"
        lastName="Amraei"
        age={22}
        hairColor="Black"
      />
      <NewComponent
        firstName="Rex"
        lastName="Amraei"
        age={21}
        hairColor="Blonde"
      />
      <NewComponent
        firstName="Craig"
        lastName="Amraei"
        age={2}
        hairColor="Black"
      />
      <NewComponent
        firstName="Carol"
        lastName="Amraei"
        age={1}
        hairColor="White"
      />
    </div>
  );
}

export default App;
