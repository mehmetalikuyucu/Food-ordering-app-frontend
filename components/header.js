import { Flex, Heading, Box, Button, Stack, Text, Tooltip, Center } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useContractStore } from '../store/store'
import { useUserStore } from '../store/store'
import { signMessage } from '../service/user_service'
const links = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Restourant',
        link: '/restaurant',
    },
    {
        name: 'Courrier',
        link: '/courrier',
    },
    {
        name: 'Signup',
        link: '/createAccount',
    },
]

const Header = () => {
    /*   const [connect, setConnect] = useState(false)
  const [address, setAddress] = useState("") */
    const isConnectedWallet = useContractStore(state => state.isConnectedWallet)
    const connectedAddress = useContractStore(state => state.connectedAddress)
    const setConnectedAdress = useContractStore(state => state.setConnectedAddress)
  const setIsConnectedWallet = useContractStore(state => state.setIsConnectedWallet)
  const user=useUserStore(state=>state.user)
    const setUser = useUserStore(state => state.setUser)
    const removeUser = useUserStore(state => state.setUser)
    

    const connectWallet = async () => {
        if (!window.ethereum) {
            return 'install metamask'
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const adress = await provider.send('eth_requestAccounts', [])
        setConnectedAdress(adress[0])
        setIsConnectedWallet()
    }


    return (
        <>
            <Flex
                direction={'row'}
                justifyContent={'space-between'}
                backgroundColor={'#FA7070'}
                alignItems={'center'}
                height={'50px'}
                px={2}>
                <Heading size={'xl'}>LOGO</Heading>
                <Stack
                    direction={'row'}
                    spacing={10}>
                    {links.map(e => {
                        return (
                            <Box
                                p={2}
                                fontSize={'m'}
                                _hover={{ border: '1px', bgColor: 'white', borderRadius: 50 }}>
                                <Link href={e.link}>{e.name}</Link>
                            </Box>
                        )
                    })}
                </Stack>

                <Flex
                    width={'150px'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}>
                    {!user.userAddress ? (
                        <Button
                            onClick={() => signMessage(setUser)}
                            colorScheme={'red'}
                            size={'sm'}>
                            Login
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                removeUser()
                                console.log(user)
                            }}
                            colorScheme={'red'}
                            size={'sm'}>
                            Logout
                        </Button>
                    )}
                    {!isConnectedWallet ? (
                        <Button
                            size={'sm'}
                            onClick={connectWallet}
                            colorScheme={'red'}>
                            Connect Wallet
                        </Button>
                    ) : (
                        <Tooltip label={user.balance}>
                            <Text noOfLines={1}>Balance:{user.balance} </Text>
                        </Tooltip>
                    )}
                </Flex>
            </Flex>
            <Flex
                alignItems={'center'}
                justifyContent={'center'}>
                Welcome: {connectedAddress}
            </Flex>
        </>
    )
}

export default Header
