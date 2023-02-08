import Head from "next/head";
import { Container } from "@chakra-ui/react";

import TripList from "@/components/TripList";

export default function Home() {
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
        <Container maxW="7xl" paddingY={10}>
          <TripList />
        </Container>
      </main>
    </>
  );
}
