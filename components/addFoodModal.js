import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { addFood } from '../service/food_service'
import { useFoodStore } from '../store/store'
const AddFoodModal = ({ onClose }) => {
    
    const { register, handleSubmit } = useForm()
const setUpdate=useFoodStore(state=>state.setUpdate)
    const onSubmit = values => {
        addFood(values,setUpdate)
        onClose()
    }

    return (
        <ModalContent>
            <ModalHeader>Add Food</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <FormControl>
                        <FormLabel>
                            İmage Link
                            <Input
                                {...register('link')}
                                isRequired></Input>
                        </FormLabel>
                    
                        <FormLabel>
                            Food Name
                            <Input {...register('name')} isRequired></Input>
                        </FormLabel>
                        <FormLabel>
                            Food Description
                            <Input {...register('desc')} isRequired></Input>
                        </FormLabel>
                        <FormLabel>
                            Category
                            <Input
                                {...register('category')}
                                isRequired></Input>
                        </FormLabel>
                        <FormLabel>
                            Price
                            <Input
                                {...register('price')}
                                isRequired type={'number'}></Input>
                        </FormLabel>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button
                        type='submit'
                        colorScheme={'blue'}>
                        Add Food
                    </Button>
                </ModalFooter>
            </form>
        </ModalContent>
    )
}

export default AddFoodModal
