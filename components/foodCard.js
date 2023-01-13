import { Box, Heading, Stack, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useStore } from '../store/store'

const FoodCard = ({ food, price, index }) => {
    return (
        <Stack
            direction={'column'}
            key={index}>
            <Box
                width={'350px'}
                height={'350px'}
                p={2}
                shadow={'2xl'}
                border={'1px solid'}>
                <Image
                    src={`${food.imageLink}`}
                    width={'350px'}
                    height={'200px'}></Image>
                <Stack
                    direction={'column'}
                    spacing={'5px'}>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Heading fontSize={'xl'}>{food.name}</Heading>
                        <Text fontWeight={'medium'}>{price} BC Token</Text>
                    </Flex>
                    <Text>{food.desc}</Text>
                    <Flex justifyContent={'flex-end'}>
                        <Text fontSize={'smaller'}>{food.resOwner}</Text>
                    </Flex>
                    <Flex justifyContent={'flex-end'}>
                        <Text fontSize={'smaller'}>{food.isActive ? 'on sell' : 'out sell'}</Text>
                    </Flex>
                    <Button>Add to Cart</Button>
                </Stack>
            </Box>
        </Stack>
    )
}

export default FoodCard
