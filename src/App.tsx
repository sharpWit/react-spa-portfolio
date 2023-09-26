import Header from "./components/header/Header";
import { DarkModeProvider } from "./context/DarkModeContext.js";
import GlobalStyles from "./styles/GlobalStyles.js";

const App = () => {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
    </DarkModeProvider>
  );
};

export default App;
