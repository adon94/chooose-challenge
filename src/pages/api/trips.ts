// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Trip = {
  name: string;
  countries: number;
  days: number;
  offset: string;
  rating: number;
};

export type Trips = {
  trips: Array<Trip>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Trips>
) {
  res.status(200).json({
    trips: [
      {
        name: "European Quest",
        countries: 8,
        days: 21,
        offset: "810 kg",
        rating: 4.7,
      },
      {
        name: "Autumn Roadtrip",
        countries: 1,
        days: 14,
        offset: "3.56 t",
        rating: 4.7,
      },
      {
        name: "Diving Adventure in Egypt",
        countries: 1,
        days: 5,
        offset: "6.92 t",
        rating: 4.7,
      },
    ],
  });
}
