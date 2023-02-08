import useSWR, { Fetcher } from "swr";
import { Grid, GridItem } from "@chakra-ui/react";

import TripCard from "@/components/TripCard";
import { Trips } from "@/pages/api/trips";

const fetcher: Fetcher<Trips, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/api/trips`,
    fetcher,
    { refreshInterval: 1000 }
  );

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;
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
