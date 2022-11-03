import { Flex, Heading, Box, Button, Stack,Text} from '@chakra-ui/react'
import {ethers} from "ethers";
import Link from "next/link";
import { useState,useEffect } from 'react';

const links = [
  {
    name: 'Home',
    link:'/'
  },
  {
    name: 'Restourant',
    link:'/restaurant'
  },
  {
    name: 'Courrier',
    link:'/courrier'
  }
]

const Header = () => {
  const [connect, setConnect] = useState(false)
  const [address,setAddress]=useState("")

  const connectWallet = async() => {
    if (!window.ethereum) {
        return "install metamask"
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const adress = await provider.send("eth_requestAccounts", [])
    setAddress(adress[0])
    setConnect(true)
  }
  useEffect(() => console.log(address), [])
  

  return (
    <>
      <Flex
        direction={'row'}
        justifyContent={'space-between'}
        backgroundColor={'#FA7070'}
        alignItems={'center'}
        height={'50px'}
        
        px={2}
      >
        <Heading size={"xl"}>LOGO</Heading>
        <Stack direction={"row"} spacing={10}>
          {links.map(e => {
            return <Box p={2} fontSize={"m"} _hover={{border:'1px',bgColor:'white',borderRadius:50}}><Link href={e.link}  >{e.name}</Link></Box>
          })}
        </Stack>

        <Flex width={"150px"}>
          {!connect ? (<Button onClick={connectWallet}
            color={"black"}>
            Connect Wallet
          </Button>) : (<Text noOfLines={1}>{address}</Text>)}
        </Flex>
      </Flex>
    </>
  )
}

export default Header
