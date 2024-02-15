import { useState } from "react";
import Button from "./components/button";
import Card from "./components/card";
import Loader from "./components/loader";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

type LoadingState = boolean | undefined;

const App = () => {
  const [loading, setLoading] = useState<LoadingState>(false);
  const [insults, setInsults] = useState<Array<string>>([]);

  /**
   * Function which uses fetch and promise chaining to get an insult from a Public API and add it to the state
   * @returns void
   */
  const fetchInsult = () => {
    setLoading(true);
    fetch(`${apiUrl}/api/insult`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setLoading(false);
        setInsults([...insults, data]);
      });
  };

  return (
    <main className="min-h-screen min-w-screen px-8 py-8 flex justify-center">
      <div className="bg-white text-black min-w-2xl flex flex-col flex-1 justify-start items-center border-solid border-black border-8 max-w-4xl min-h-full">
        <h1 className="text-4xl font-black my-8 uppercase px-10">
          Insult Generator
        </h1>
        <Button callback={fetchInsult} loading={loading}>
          Generate Insult
        </Button>
        <ul className="px-10 py-6 w-full max-w-2xl flex flex-col-reverse">
          {insults.map((element, index) => (
            <Card key={index} loading={false} data-testid="loading-card">
              {element}
            </Card>
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
