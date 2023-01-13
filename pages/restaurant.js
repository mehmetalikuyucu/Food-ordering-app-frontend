import { Box, Stack, Divider, Flex, Heading, Text, Icon, Image, Button, useDisclosure, Modal, ModalOverlay, SimpleGrid } from '@chakra-ui/react'
import { GrAdd } from 'react-icons/gr'
import { useFoodStore, useUserStore } from '../store/store'
import AddFoodModal from '../components/addFoodModal'
import { useState, useEffect } from 'react'
import { changeActivityFood, getFoods } from '../service/food_service'

const Restaurant = () => {
    const [modal, setModal] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const restaurantName = 'kardeşler restoran'
    const user = useUserStore(state => state.user)
    const setFoods = useFoodStore(state => state.setFoods)
    const update = useFoodStore(state => state.update)
    const setUpdate = useFoodStore(state => state.setUpdate)
    const foods = useFoodStore(state => state.foods.filter(food => food.resOwner === user.userAddress))

    useEffect(() => {
        getFoods(setFoods)
    }, [update])

  useEffect(() => {
      console.log(foods);
        getFoods(setFoods)
    }, [])

    return (
        <>
            <Flex
                justify={'center'}
                align={'center'}
                height={'200px'}>
                <Heading>{user.restaurant.name}</Heading>
            </Flex>
            <Flex align={'center'}>
                <Divider borderColor={'black'}></Divider>
                <Text mx={5}>ürünler</Text>
                <Divider borderColor={'black'}></Divider>
            </Flex>
            <SimpleGrid
                columns={3}
                spacing={3}>
                {foods.map((food, index) => {
                    let price = food.price.toNumber()

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
                                    <Button
                                        onClick={() => {
                                            changeActivityFood(index + 1, setUpdate)
                                        }}>
                                        Change Active
                                    </Button>
                                </Stack>
                            </Box>
                        </Stack>
                    )
                })}
                <Stack direction={'column'}>
                    <Flex
                        align={'center'}
                        as='button'
                        onClick={() => {
                            setModal(<AddFoodModal onClose={onClose}></AddFoodModal>)
                            onOpen()
                        }}
                        justify={'center'}
                        width={'350px'}
                        h={'350px'}
                        p={2}
                        shadow={'2xl'}
                        border={'1px solid'}
                        direction={'column'}>
                        <GrAdd size={'100px'}></GrAdd>
                        <Text> ürün ekle</Text>
                    </Flex>
                </Stack>
            </SimpleGrid>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='5px'></ModalOverlay>
                {modal}
            </Modal>
        </>
    )
}

export default Restaurant
