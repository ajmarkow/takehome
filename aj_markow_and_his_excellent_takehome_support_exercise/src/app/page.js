import Image from "next/image";
import { Grid, GridItem,Heading} from '@chakra-ui/react'


export default function Page() {
  return (
    <Grid
  h='100vh'
  templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      columnGap={1}
>
      <GridItem rowSpan={3} colSpan={1} bg='#EDFDFD' />
      <GridItem colSpan={4} rowSpan={1} bg='#FFF8E7'>
        <Heading size='4xl' fontWeight='bold' textAlign='left' noOfLines={1} color='black' marginLeft='5vw' marginTop='5vh'>
          AJ Markow's Project for Vercel's Support Engineer Exercise
        </Heading>
      </GridItem>
  <GridItem colSpan={4} bg='#FFF8E7' />
  <GridItem colSpan={4} bg='#FFF8E7' />
</Grid>
  )
}
