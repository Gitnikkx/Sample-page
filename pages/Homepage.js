import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box } from "../atoms/Box/Box";
import { Grid } from "../atoms/Grid/Grid";
import { Flex } from "../atoms/Flex/Flex";
import { Card } from "../atoms/Card/Card";

const cardData = [
  {
    id: 0,
    title: "1. Vellayani Lake",
    src: "/images/img2.jpg",
    distance: "4km from city center",
    type: "1 out of 24 places in kollam",
    content:
      "Vellayani Lake is a prominent freshwater lake in Kerala. In and around the lake one can find abundant flora and fauna that can be best explored over a boat ride or a walk along the boulevard. It also happens to be known for its unique ecosystem. The lake got an intriguing past too. The story goes like this - once there was abeggar who was feeling thirsty, and his search of water made him visit a saint, who was meditating at that time. He wanted to give water to  the beggar but her vessel was almost empty with only a few drops of  water.",
  },
  {
    id: 1,
    title: "2. Hills",
    src: "/images/img1.jpg",
    distance: "8km from city center",
    type: "2 out of 24 places in kollam",
    content:
      "Vellayani Lake is a prominent freshwater lake in Kerala. In and around the lake one can find abundant flora and fauna that can be best explored over a boat ride or a walk along the boulevard. It also happens to be known for its unique ecosystem. The lake got an intriguing past too. The story goes like this - once there was abeggar who was feeling thirsty, and his search of water made him visit a saint, who was meditating at that time. He wanted to give water to  the beggar but her vessel was almost empty with only a few drops of  water.",
  },
  {
    id: 2,
    title: "3. Water Sports",
    src: "/images/img3.jpg",
    distance: "5km from city center",
    type: "3 out of 24 places in kollam",
    content:
      "Vellayani Lake is a prominent freshwater lake in Kerala. In and around the lake one can find abundant flora and fauna that can be best explored over a boat ride or a walk along the boulevard. It also happens to be known for its unique ecosystem. The lake got an intriguing past too. The story goes like this - once there was abeggar who was feeling thirsty, and his search of water made him visit a saint, who was meditating at that time. He wanted to give water to  the beggar but her vessel was almost empty with only a few drops of  water.",
  },
];
export const Homepage = () => {
  return (
    <>
      <Box>
        <Grid
          gridTemplateColumns="20rem 1fr"
          bg="#F9F4F3"
          p="5rem"
          gridGap="5rem"
        >
          <Image src="/images/img1.jpg" alt="img" width={350} height={350} />
          <Box>
            <Flex alignItems="center">
              <Box marginRight="10rem" fontSize="3rem">
                Places to visit kovalam
              </Box>
              <Box
                width="4rem"
                height="2rem"
                bg="green"
                borderRadius="0.5rem"
                textAlign="center"
                py="0.5rem"
              >
                4/5
              </Box>
            </Flex>
            <Link href="https://www.holidify.com/places/kovalam/vellayani-lake-sightseeing-120727.html">
              <Box
                mt="3rem"
                border="2px solid"
                borderRadius="0.5rem"
                cursor="pointer"
                borderColor="lightblue"
                width="fit-content"
                p="1rem"
              >
                View all hotels in kolavam
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid gridTemplateColumns="1fr 1fr 1fr" placeItems="center">
          {cardData.map((items, index) => {
            return (
              <Card
                key={index}
                title={items?.title}
                imgSrc={items?.src}
                distance={items?.distance}
                type={items?.type}
                content={items?.content}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
