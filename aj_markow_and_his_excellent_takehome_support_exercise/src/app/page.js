import Image from "next/image";
import { Link,Divider,Center,Grid, GridItem,Heading, OrderedList,ListItem,Text} from '@chakra-ui/react'


export default function Page() {
  return (
    <Grid
  h='100vh'
  templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      columnGap={1}
>
      <GridItem rowSpan={3} colSpan={1} bg='#EDFDFD'>
            <Heading size='2xl' fontWeight='bold' textAlign='left' color='black' marginLeft='5vw' marginTop='5vh' fontSize='4vh' marginBottom="8vh">
        Questions
        </Heading>
        <Center>
          <OrderedList color='black' spacing="5vh" marginBottom="10vh" fontSize={"24px"} alignContent={"center"}>
            <Link href="/questions/1">
              <ListItem>Question 1</ListItem>
            </Link>
                          <Divider />
            <Link href="/questions/2">
              <ListItem>Question 2</ListItem>
            </Link>
                          <Divider />
                        <Link href="/questions/3">
              <ListItem>Question 3</ListItem>
                            
            </Link>
            <Divider />
                        <Link href="/questions/4">
              <ListItem>Question 4</ListItem>          
            </Link>
            <Divider />
                        <Link href="/questions/5">
              <ListItem>Question 5</ListItem>
            </Link>
                          <Divider />
                        <Link href="/questions/6">
              <ListItem>Question 6</ListItem>            
            </Link>
            <Divider />
                        <Link href="/questions/7">
              <ListItem>Question 7</ListItem>
            </Link>
          </OrderedList>
          </Center>
      </GridItem>
      <GridItem colSpan={4} rowSpan={1} bg='#FFF8E7'>
        <Heading size='4xl' fontWeight='bold' textAlign='left' noOfLines={1} color='black' marginLeft='5vw' marginTop='5vh' fontSize='4vh'>
          AJ Markow's Project for Vercel's Support Engineer Exercise
        </Heading>
      </GridItem>
      <GridItem colSpan={4} bg='#FFF8E7'>
        <Text color='black' fontSize='2vh' marginLeft='10vw' >
          Thank you for your consideration for this role.
          <br/>
          I hope you enjoy reading my answers, and reviewing my code.
          <br/>
          I'm excited for you to learn about my support engineering approach and experience.
        </Text>
  </GridItem>
  <GridItem colSpan={4} bg='#FFF8E7' />
</Grid>
  )
}
