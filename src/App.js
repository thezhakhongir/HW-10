import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const result = await response.json();
      setPhotos(result);
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      {photos.map((photo) => {
        return <Card photo={photo} />;
      })}
    </div>
  );
}

export default App;
