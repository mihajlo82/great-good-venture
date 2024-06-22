import { Chart } from "./components/chart/Chart";
import Table from "./components/table/Table";
import "./App.css";

function App() {
  return (
    <main id="app">
      <h2>Dashboard</h2>
      <Chart />
      <Table />
    </main>
  );
}

export default App;
