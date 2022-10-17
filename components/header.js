import React from 'react'
import { Flex,Badge,Link,Button} from "@chakra-ui/react";
const List = ({ link }) => {
  return (
    <Link px={3}>{link}</Link>
  )
}
const links = ["Home", "Menu", "Shop"]

const Header = () => {
  return (
    <Flex
      width={'100vw'}
      padding={3}
      justifyContent={'space-between'}
      alignItems={"center"}
    >
      <Badge>LOGO</Badge>
      <Flex justifyContent={'space-between'}>
        {links.map((item) => {
          return (<List link={item}></List>)
        })}
      </Flex>
      <Flex> <Button>Connect Wallet&Login</Button></Flex>
    </Flex>
    
  )
}

export default Header