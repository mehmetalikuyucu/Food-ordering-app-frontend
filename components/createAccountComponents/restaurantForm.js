import {
  Button,
  Text,
  Input,
  Stack
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { createRestaurantAccount } from '../../service/user_service'

const RestaurantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = ({restaurantName,restaurantDescription}) => {
createRestaurantAccount(restaurantName,restaurantDescription)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={'20px'}
      >
        <Input
          {...register('restaurantName', { required: true, minLength: 5 })}
          placeholder={'restaurant name'}
          borderColor={'black'}
        ></Input>
        {/* empty and minumum charchter controller  */}
        {errors.restaurantName?.type === 'required' && (
          <Text fontSize={'smaller'} color={'red'} >
            bu alan zorunludur
          </Text>
        )}
        {errors.restaurantName?.type === 'minLength' && (
          <Text fontSize={'smaller'} color={'red'} >
            minumum character 5
          </Text>
        )}

        <Input
          {...register('restaurantDescription')}
          placeholder={'restaurant description'}
          borderColor={'black'}
        ></Input>
        <Button type='submit' value={'submit'} colorScheme={'blue'}>
          Create
        </Button>
      </Stack>
    </form>
  )
}

export default RestaurantForm
