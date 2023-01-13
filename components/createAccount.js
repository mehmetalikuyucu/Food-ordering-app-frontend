import {
  Button,
  Flex,
  Heading,
  HStack,
  Stack
} from '@chakra-ui/react'

import { useClientStore } from '../store/store'
import RestaurantForm from './createAccountComponents/restaurantForm'
import CourrierForm from './createAccountComponents/courrierForm'
import CustomerForm from './createAccountComponents/customerForm'


const CreateAccount = () => {
  
  const selectedClient = useClientStore(state => state.selectedClient)
  const typeClients = useClientStore(state => state.clients)
  const setSelectedClient = useClientStore(state => state.setSelectedClient)
  

  

  /*
const loglama=useContractStore(state=>state.setConnected)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const onSubmit = d => {
    if (typeClient === 'Customer') {
      createCustomerAccount(d.name, d.description)
    } else {
      createRestaurantAccount(d.adres, d.mail)
    }
  }

 const contractConnect = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAdress, abi, provider)
    return { contract, signer }
  }  

  const createCustomerAccount = async (adres, mail) => {
    const { contract, signer } = await contractConnect
    const contractWithSigner = contract.connect(signer)
    contractWithSigner
      .createCustomer(adres, mail)
      .then(tx => console.log(tx))
      .catch(e => {
        console.log(e)
        alert('hesap oluşturulamadı')
      })
    contract.on('CreateCustomer', e => console.log(e))
  }

  const createRestaurantAccount = async (name, desc) => {
    const { contract, signer } = await contractConnect()
    const contractWithSigner = contract.connect(signer)
    contractWithSigner
      .createRestaurant(name, desc)
      .then(tx => console.log(tx.gasPrice))
      .catch(e => {
        console.log(e)
        alert('hesap oluşturulamadı')
      })

    console.log('restoran 1', await contractWithSigner.restaurants(0))
    contract.on('CreateRestaurant', (e, _name) => console.log(e, _name))
  } 
  */

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
          <Heading>Create a {selectedClient} Account</Heading>
          <HStack>
            {typeClients.map((client, index) => {
              return (
                <Button                  
                  key={index}
                  variant={selectedClient===client?'outline':''}
                  onClick={() => setSelectedClient(client)}
                  borderColor={'black'}
                  bgColor={'white'}
                  shadow={'xl'}
                >
                  {client}
                </Button>
              )
            })}
          </HStack>
          {selectedClient==='Restaurant'?<RestaurantForm></RestaurantForm>:selectedClient==='Customer'?<CustomerForm></CustomerForm>:<CourrierForm></CourrierForm>}
        </Stack>
      </Flex>
    </>
  )
}

export default CreateAccount
