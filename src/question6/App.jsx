// 6.  med ReduxGlobal state eller Context (3p)
// Skapa två komponenter: En som heter Read och en som heter Write.
// Write ska ha ett inputfält och det som skrivs ska sparas i global state.
// Read ska visa en valfri text som skrivs i Write.
// Read ska visa det som sparas i global state.
// Lägg in Read och Write komponenterna i App-komponenten.
import { globalState } from "react";
import { Provider } from "react-redux";
import store from "./Store";

import Slice from "./Slice";
import Write from "./Componenter/Write";

const globalStateContext = React.createContext(globalState);

function App() {
  return (
    <Provider store={store}>
      <Write />
      <Read />
    </Provider>
  );
}

export default App;
