import "./App.css";
import data from "../data.json";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <main className="grid min-h-screen w-full place-items-center bg-very-dark-blue p-10 ">
      <CardsContainer data={data} />
    </main>
  );
}

export default App;
