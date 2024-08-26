import { useState, useEffect } from 'react';

function useFetch(url: string, headersParam?: HeadersInit) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
       const headers = {
        ...headersParam,
        'X-GitHub-Api-Version': '2022-11-28'
      }
      const response = await fetch(url, {headers: headers});

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true)
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;