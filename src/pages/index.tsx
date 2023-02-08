import Head from "next/head";
import { useEffect, useState } from "react";
import { Trips } from "./api/trips";

export default function Home() {
  const [data, setData] = useState<Trips | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/trips")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No trips data</p>;

  return (
    <>
      <Head>
        <title>Chooose Challenge</title>
        <meta
          name="description"
          content="A task completed by front end developer Adam O'Neill for Chooose"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data.trips.map((trip) => (
          <div key={trip.name}>
            <h1>{trip.name}</h1>
            <p>
              {trip.countries} countr{trip.countries > 1 ? "ies" : "y"},{" "}
              {trip.days} day{trip.days > 1 && "s"}
            </p>
            <p>Emmissions offset: {trip.offset}</p>
            <p>Trip rating: {trip.rating}</p>
          </div>
        ))}
      </main>
    </>
  );
}
