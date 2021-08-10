import React from "react";
import NavigationalBar from "./Components/NavigationalBar";
import "./static/App.css";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
        <NavigationalBar/>
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;