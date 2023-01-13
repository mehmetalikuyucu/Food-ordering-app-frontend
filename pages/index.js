import Carousel from '../components/carousel'
// import FoodCategory from '../components/foodCategory'
import {useEffect } from "react";
import FoodCard from '../components/foodCard'
import { Button, Divider, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { useFoodStore } from '../store/store'
import { getFoods } from '../service/food_service'
const Home = () => {
    const foods = useFoodStore(state => state.foods)
  const cartFoods = useFoodStore(state => state.cartFoods)
  const setFoods = useFoodStore(state => state.setFoods)
  const update=useFoodStore(state=>state.update0)

    useEffect(() => {
        getFoods(setFoods)
    }, [update])

    useEffect(() => {
        console.log(foods)
        getFoods(setFoods)
    }, [])
  
    return (
        <>
            <Stack spacing={'20px'}>
                <Carousel></Carousel>
                {/*         <FoodCategory></FoodCategory> */}
          <Divider borderColor={'black'}></Divider>
          <Heading size='sm'>Cart</Heading>
                <SimpleGrid
                    columns={3}
                    spacing={3}>
                    {cartFoods.map((food, index) => {
                        const price = food.price.toNumber()
                        return (
                            <FoodCard
                                food={food}
                                index={index}
                                price={price}></FoodCard>
                        )
                    })}
          </SimpleGrid>
          <Button > Confirm Order</Button>
                <Divider borderColor={'black'}></Divider>
                {/*         <FoodCategory></FoodCategory> */}
                <SimpleGrid
                    columns={3}
                    spacing={3}>
                    {foods.map((food, index) => {
                        const price = food.price.toNumber()
                        return (
                            <FoodCard
                                food={food}
                                index={index}
                                price={price}></FoodCard>
                        )
                    })}
                </SimpleGrid>
            </Stack>
        </>
    )
}

export default Home
