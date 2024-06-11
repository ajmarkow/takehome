import { Center,Text,Link,Heading,Grid, GridItem } from '@chakra-ui/react';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database

export default async function Page({ params }) {
  async function getData() {
    const supabase = createClient('https://qcwyklypqexvdbrgoxmu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjd3lrbHlwcWV4dmRicmdveG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwNjQ0MDYsImV4cCI6MjAzMzY0MDQwNn0.Aqyuhxic2dqdfrclz0kML41c6_a8TIMMlnpKUOLVYxs')
    console.log(supabase);
    console.log(params.id);
    const res = await supabase.from('questions').select().eq('id', params.id)
    return res
}
 

  

  const data = await getData()
  return (
    <div>
      <Grid
  h='100vh'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
        <GridItem colSpan={5} rowSpan={1} bg='#EDFDFD'>
          <Heading size='4xl' fontWeight='bold' textAlign='left' color='black' marginLeft='5vw' marginTop='5vh' fontSize='2vh' marginBottom="8vh">
            Question {params.id} → {data.data[0].question}
          </Heading>
  </GridItem>

        <GridItem colSpan={5} rowSpan={5} bg='#FFF8E7'>
          <Text color='black' fontSize='24px' margin='10vw' >
                        Answer {params.id} → {data.data[0].answer}

          </Text>
        </GridItem>
        <GridItem colSpan={5} rowSpan={1} bg='#FFF8E7'>
          <Center>
          <Text color='black' as='mark' textShadow={10}>          <Link color='teal.500' href='/' fontSize={"2vh"}>
            Return to the homepage
          </Link></Text>
</Center>
      </GridItem>
      </Grid>





    </div>
  )
}