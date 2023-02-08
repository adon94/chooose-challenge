import { Card, Text, Flex, Box, AspectRatio } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { type Trip } from "@/pages/api/trips";

type props = {
  trip: Trip;
};

export default function TripCard({ trip }: props) {
  const imageStyles = {
    background: `url(${trip.image}) center/cover no-repeat`,
  };
  return (
    <Box shadow="md" bg="white" rounded="xl" padding="2">
      <AspectRatio ratio={4 / 3}>
        <Box sx={imageStyles} rounded="xl" overflow="hidden">
          <Box
            height="100%"
            width="100%"
            backdropFilter="auto"
            backdropBrightness="60%"
          >
            <Box height="100%" position="relative">
              <Flex
                height="100%"
                alignItems="center"
                justify="center"
                direction="column"
              >
                <Text
                  color="white"
                  align="center"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                >
                  {trip.name}
                </Text>
                <Text
                  color="white"
                  align="center"
                  fontSize="xs"
                  fontWeight="semibold"
                >
                  {trip.countries} countr{trip.countries > 1 ? "ies" : "y"},{" "}
                  {trip.days} day{trip.days > 1 && "s"}
                </Text>
                <Flex
                  backgroundColor="gray.800"
                  padding="3"
                  rounded="xl"
                  marginY="2"
                  marginX="auto"
                  width="70%"
                  justify="space-between"
                >
                  <Text
                    color="white"
                    align="center"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="semibold"
                  >
                    Emmissions offset:
                  </Text>
                  <Text
                    color="white"
                    align="center"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="semibold"
                  >
                    {trip.offset} CO₂e
                  </Text>
                </Flex>
              </Flex>
              <Flex
                width="100%"
                position="absolute"
                bottom="0"
                justify="center"
                wrap="nowrap"
              >
                <Flex
                  backgroundColor="white"
                  padding={{ base: "2", md: "3" }}
                  roundedTop="xl"
                  marginX="auto"
                  width="70%"
                  justify="space-between"
                  align="center"
                >
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="semibold"
                  >
                    Trip rating:
                  </Text>
                  <ReactStars
                    count={5}
                    size={20}
                    color2={"#ffd700"}
                    value={trip.rating}
                    edit={false}
                  />
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="semibold"
                  >
                    {trip.rating}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </AspectRatio>
    </Box>
  );
}
