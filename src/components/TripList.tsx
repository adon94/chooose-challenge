import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import { Trips, type Trip } from "@/pages/api/trips";

export default function TripList() {
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
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        {data.trips.map((trip) => (
          <GridItem key={trip.name}>
            <TripCard trip={trip} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
