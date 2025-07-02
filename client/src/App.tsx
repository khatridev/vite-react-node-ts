import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<{ message: string }>();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setData(data);
      } catch (err: unknown) {
        console.error('API Error:', err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div
        data-testid="container"
        className="min-h-screen flex flex-col items-center justify-center text-gray-800"
        style={{ width: '100vw', height: '100vh' }}
      >
        <header className="text-center py-12">
          <div className="text-2xl font-bold">Full Stack Boilerplate</div>
          <p className="mt-4 text-lg text-gray-600">React + Node.js + TypeScript + Tailwind</p>
        </header>
        <br />
        <section className="max-w-3xl mx-auto px-4 mt-12 flex gap-5 items-center">
          <div className="text-lg">front end works with Tailwind</div> |
          <p className="mt-4 text-lg">{data?.message || 'error in api call'}</p>
        </section>
      </div>
    </>
  );
}

export default App;
