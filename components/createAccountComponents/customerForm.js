import React from 'react'
import { Button, Text, Input, Stack,InputLeftAddon,InputGroup} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createCustomerAccount } from '../../service/user_service'
const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = ({name,mail,phoneNumber}) => {
    
    createCustomerAccount(name,mail,phoneNumber)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={'10px'}>
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

              <Input
                  {...register('mail', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  placeholder={'mail'}
                  borderColor={'black'}></Input>
              {/* empty and truemail controller  */}
              {errors.mail?.type === 'required' && (
                  <Text
                      fontSize={'smaller'}
                      color={'red'}
                      m={0}
                      p={0}>
                      bu alan zorunludur
                  </Text>
              )}
              {errors.mail?.type === 'pattern' && (
                  <Text
                      fontSize={'smaller'}
                      color={'red'}
                      m={0}
                      p={0}>
                      not valid email
                  </Text>
              )}

              <InputGroup borderColor={'black'}>
                  <InputLeftAddon children='+90' />
                  <Input
                      type='tel'
                      placeholder='phone number'
                      {...register('phoneNumber', { required: true, minLength: 3 })}
                  />
              </InputGroup>
              {/* empty and minumum lenght controller  */}
              {errors.phoneNumber?.type === 'required' && (
                  <Text
                      fontSize={'smaller'}
                      color={'red'}
                      m={0}
                      p={0}>
                      bu alan zorunludur
                  </Text>
              )}
              {errors.phoneNumber?.type === 'minLength' && (
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

export default CustomerForm
