import React from 'react'
import { Button,  Input, Stack,Text} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { createCourrier } from '../../service/user_service'
const CourrierForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = ({name}) => {
        createCourrier(name)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={'20px'}>
                <Input
                    {...register('name', { required: true, minLength: 3 })}
                    placeholder={'name'}
                    borderColor={'black'}></Input>
                {/* empty and minumum lenght controller  */}
                {errors.name?.type === 'required' && (
                    <Text
                        fontSize={'smaller'}
                        color={'red'}
                        m={0}
                        p={0}>
                        bu alan zorunludur
                    </Text>
                )}
                {errors.name?.type === 'minLength' && (
                    <Text
                        fontSize={'smaller'}
                        color={'red'}
                        m={0}
                        p={0}>
                        minumum 3 character
                    </Text>
                )}

                <Button
                    type='submit'
                    value={'submit'}
                    colorScheme={'blue'}>
                    Create
                </Button>
            </Stack>
        </form>
    )
}

export default CourrierForm
