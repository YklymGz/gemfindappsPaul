import { ContextWrapper } from "context";
import { Homepage } from "scenes/homepage";
import "./styles.css";

function App() {
  return (
    <ContextWrapper>
      <Homepage />
    </ContextWrapper>
  );
}

export default App;
