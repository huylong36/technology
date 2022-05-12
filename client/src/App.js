import { useEffect, useState } from "react";
import Layout from "./components/layout/layout";
import { AppNavigator } from "./navigation/appNavigation";

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
}, []);
const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
      setVisible(true);
  } else {
      setVisible(false);
  }
};

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};

  return (
    <div className="App">
      <AppNavigator/>
      
      {visible &&
            <div onClick={scrollToTop}>
                Scroll
            </div>
        }
    </div>
  );
}

export default App;
