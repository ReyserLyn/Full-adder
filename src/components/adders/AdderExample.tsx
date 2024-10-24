import { FormEvent, useState } from "react";

interface AdderExampleProps {
  sumType: string;
}

const AdderExample: React.FC<AdderExampleProps> = ({ sumType }) => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const endpoint = `http://0.0.0.0:8085/${sumType}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num1: parseInt(num1, 10),
          num2: parseInt(num2, 10),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Número 1:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Número 2:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Sumar</button>
      </form>

      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>}
      {result !== null && <div>La suma es: {result}</div>}
    </div>
  );
};

export default AdderExample;
