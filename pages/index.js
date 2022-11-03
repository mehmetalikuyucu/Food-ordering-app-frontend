import Carousel from '../components/carousel'
import FoodCategory from '../components/foodCategory'
import FoodCard from '../components/foodCard'
import { Stack } from '@chakra-ui/react'
const Home = () => {
  return (
    <>
      <Stack spacing={"20px"}>
        <Carousel></Carousel>
        <FoodCategory></FoodCategory>
        <FoodCard></FoodCard>
      </Stack>
    </>
  )
}

export default Home
