import { Badge, Flex } from '@chakra-ui/react'
import React from 'react'
 

const categories=["Kebap","Ekmek Arası","Köfte","Tatlı","Çorba","Döner","Pilav","Izgara"]
const FoodCategory = () => {
    return (
        <>
            <Flex my={5} justifyContent={'center'} alignItems={'center'} >
                {categories.map((category) => {
                    return (
                        <Badge m={2} p={3}>{ category}</Badge>
                    )
                })}
            </Flex>
        </>
    )
}

export default FoodCategory