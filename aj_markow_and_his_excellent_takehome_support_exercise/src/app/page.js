import Image from "next/image";
import { Grid, GridItem } from '@chakra-ui/react'
import {Center} from '@chakra-ui/react'


export default function Page() {
  return (
    <Grid
  h='100vh'
  templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      columnGap={1}
>
  <GridItem rowSpan={3} colSpan={1} bg='#EDFDFD' />
  <GridItem colSpan={4} bg='#FFF8E7' />
  <GridItem colSpan={4} bg='#FFF8E7' />
</Grid>
  )
}
