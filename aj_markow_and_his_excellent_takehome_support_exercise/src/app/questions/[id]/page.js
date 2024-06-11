import { Heading,Grid, GridItem } from '@chakra-ui/react';

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://qcwyklypqexvdbrgoxmu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjd3lrbHlwcWV4dmRicmdveG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwNjQ0MDYsImV4cCI6MjAzMzY0MDQwNn0.Aqyuhxic2dqdfrclz0kML41c6_a8TIMMlnpKUOLVYxs')

export default async function Page({ params }) {

  const { data, error } = await supabase
  .from('questions')
  .select()
    .eq('id', params.id)
  
  return (
    <div>
      <Grid
  h='100vh'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={1}
>
        <GridItem colSpan={5} rowSpan={1} bg='#EDFDFD'>
          <Heading size='2xl' fontWeight='bold' textAlign='left' noOfLines={1} color='black' marginLeft='5vw' marginTop='5vh' fontSize='4vh' marginBottom="8vh">
          {data.question}
          </Heading>
  </GridItem>

  <GridItem colSpan={5} rowSpan={5} bg='#FFF8E7' />
</Grid>
    </div>
  )
}