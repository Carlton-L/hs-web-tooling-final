import { useState } from "react";
import Button from "./components/button";
import Card from "./components/card";
import Loader from "./components/loader";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface InsultState {
  insults: string[];
}

const App = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [insults, setInsults] = useState<Array<string>>([]);

  const fetchInsult = () => {
    setLoading(true);
    fetch(`${apiUrl}/generate_insult.php?lang=en&type=json`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setInsults([...insults, data.insult]);
        console.log(insults);
      });
  };

  return (
    <main className="min-h-screen min-w-screen px-8 py-8 flex">
      <div className="bg-white text-black min-w-2xl flex flex-col flex-1 justify-start items-center border-solid border-black border-8 max-w-4xl min-h-full">
        <h1 className="text-4xl font-black my-8 uppercase px-10">
          Insult Generator
        </h1>
        <Button callback={fetchInsult} loading={loading}>
          Generate Insult
        </Button>
        <ul className="px-10 py-6 w-full max-w-2xl flex flex-col-reverse">
          {insults.map((element, key) => (
            <Card loading={false}>{element}</Card>
            ))}
            {loading && (
              <Card loading={true}>
                <Loader />
              </Card>
            )}
        </ul>
      </div>
    </main>
  );
};

export default App;
