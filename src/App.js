import Content from "./components/Content";
import { TodoProvider } from "./components/contexts/TodoContext";
import Header from "./components/Header";
import LastFooter from "./components/LastFooter";

function App() {
  return (
  <TodoProvider>
  <section className="todoapp">
    <Header/>
    <Content/>
  </section>
  <LastFooter/>
  </TodoProvider>
  );
}

export default App;
