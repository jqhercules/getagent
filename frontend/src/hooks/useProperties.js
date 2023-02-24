import { useState, useEffect } from "react";

export default function useProperties(searchTerm) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpointUrl = `http://localhost:3000`;

  useEffect(() => {
    (async function () {
      try {
        if (!searchTerm) return;

        setLoading(true);

        const resp = await fetch(
          `${endpointUrl}/lrProperty/${searchTerm.toUpperCase()}`
        );
        const result = await resp.json();

        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchTerm]);

  return [data, loading, error];
}
