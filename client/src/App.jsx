import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [reci, setReci] = useState([]);
  useEffect(() => {
    const recipes = async () => {
      const recipes = await fetch("http://localhost:4000/api/v1/recipes");
      const data = await recipes.json();
      setReci(data);
    };

    recipes(); 
  }, []);

  return (
    <main>
      <div>data {reci?.recipes?.length}</div>
    </main>
  );
}

export default App;
