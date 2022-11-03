import { Box, Heading, Stack, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

const FoodCard = () => {
  const food = {
    title: 'Izgara',
    image: 'kebap.jpg',
    price: '0.05',
    dec: 'Exercitation dolor ex non consectetur id.',
    restoran: 'mercanlar ızgara'
  }
  
  return (
    <Stack direction={'column'}>
      <Box width={'300px'} p={2} shadow={'2xl'} border={'1px solid'}>
        <Image src={`${food.image}`}></Image>
        <Stack direction={'column'} spacing={'5px'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Heading fontSize={'xl'}>{food.title}</Heading>
            <Text fontWeight={'medium'}>{food.price} ether</Text>
          </Flex>
          <Text>{food.dec}</Text>
          <Flex justifyContent={'flex-end'}>
            <Text fontSize={'smaller'}>{food.restoran}</Text>
                  </Flex>
                  <Button>Add to cart</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default FoodCard
