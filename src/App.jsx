import Balance from "./components/Balance";
import Form from "./components/Form";
import Header from "./components/Header";
import History from "./components/History";
import { GlobalProvider } from "./context/GlobalContext";
import IncomeExpense from "./IncomeExpense";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <Form />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
