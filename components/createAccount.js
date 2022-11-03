import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Input,
  Stack
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ethers } from 'ethers'
import Contract from '../public/BlockCart.json'
const contractAdress = '0x6019b5aca05db82032fa0fab5163c6ec842e83db'

const CreateAccount = () => {
  const typeClients = ['Restaurant', 'Customer']
  const [typeClient, setTypeClient] = useState('Customer')
  const { register, handleSubmit } = useForm()

  const onSubmit = d => {
    if (typeClient === 'Customer') {
      createCustomerAccount(d.name, d.description)
    } else {
      createRestaurantAccount(d.adres, d.mail)
    }
  }

  const abi = Contract.abi

  const contractConnect = async abi => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAdress, abi, provider)
    return { contract, signer }
  }

  const createCustomerAccount = async (adres, mail) => {
    const { contract, signer } = await contractConnect(abi)
    const contractWithSigner = contract.connect(signer)
    try {
      contractWithSigner.createCustomer(adres, mail)
    } catch (error) {
      alert(error)
      return error
    }
    contract.on('CreateCustomer', e => console.log(e))
  }

  const createRestaurantAccount = async (name, desc) => {
    const { contract, signer } = await contractConnect(abi)
    const contractWithSigner = contract.connect(signer)
    contractWithSigner.createRestaurant(name, desc).then(tx => console.log(tx)).catch(e => {
      if (e.code === 4001) {
        return false
      }
    })
  
    
    
    contract.on('CreateRestaurant', (e, _name) => console.log(e, _name))

  }

  useEffect(() => {}, [])

  return (
    <>
      <Flex
        w={'full'}
        height={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack
          direction={'column'}
          spacing={'20px'}
          border={'1px'}
          padding={5}
          borderRadius={5}
        >
          <Heading>Create a {typeClient} Account</Heading>
          <HStack>
            {typeClients.map(i => {
              return <Button onClick={() => setTypeClient(i)}>{i}</Button>
            })}
          </HStack>
          {typeClient === 'Restaurant'
            ? handleForm(
                handleSubmit,
                onSubmit,
                register,
                'name',
                'description'
              )
            : handleForm(handleSubmit, onSubmit, register, 'adres', 'mail')}
        </Stack>
      </Flex>
    </>
  )
}

const handleForm = (handleSubmit, onSubmit, register, arg1, arg2) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={'20px'}
      >
        <Input
          {...register(arg1)}
          placeholder={arg1}
          borderColor={'black'}
        ></Input>
        <Input
          {...register(arg2)}
          placeholder={arg2}
          borderColor={'black'}
        ></Input>
        <Button type='submit' value={'submit'}>
          Create
        </Button>
      </Stack>
    </form>
  )
}

export default CreateAccount
