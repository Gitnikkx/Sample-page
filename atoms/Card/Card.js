import React from "react";
import Image from "next/image";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { Grid } from "../Grid/Grid";
export const Card = ({ title, imgSrc, distance, type, content }) => {
  return (
    <>
      <Box
        border="2px solid gray"
        width="fit-content"
        p="1rem"
        my="2rem"
        borderRadius="2rem"
      >
        <Text mb="1rem">{title}</Text>
        <Image src={imgSrc} alt="img" width={300} height={300} />
        <Grid
          gridTemplateColumns="auto auto"
          justifyContent="center"
          mt="1rem"
          bg="#FEF1EC"
          p="0.5rem"
          borderRadius="0.2rem"
        >
          <Text maxWidth="8rem" textAlign="center" fontSize="1rem">
            {distance}
          </Text>
          <Text maxWidth="8rem" textAlign="center" fontSize="1rem">
            {type}
          </Text>
        </Grid>
        <Text maxWidth="18rem" textAlign="justify" mt="1rem" fontSize="1.2rem">
          {content}
        </Text>
      </Box>
    </>
  );
};
