import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Bids from "./components/bids";

import { useWeb3React } from "@web3-react/core";

function App() {
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Bids />
      <Footer />
    </>
  );
}

export default App;
