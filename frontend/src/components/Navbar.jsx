import { Container,Flex, HStack, Button, Text, useColorMode } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {PlusSquareIcon} from "@chakra-ui/icons"

import {IoMoon} from "react-icons/io5"
import {LuSun} from "react-icons/lu"


const Navbar = () => {
  const{colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row",
            }}> 
            <Text
              fontSize={{base:"22", sm: "22"}}
              fontWeight={'extrabold'}
              textAlign ={"center"}
              textTranform ={"uppercase"}
              bgGradient={'linear(to-l, #7928CA, #FF0080)'}
              bgClip={'text'}
            >
            <Link to={"/"}>develapar Store</Link>

           
          </Text>
          <HStack spacing={2} alignItems={"center"}>
                      <Link to={"/create"}>
                      <Button>
                        <PlusSquareIcon/>
                      </Button>
                      </Link>

                      <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>}
                      </Button>
            </HStack>

        </Flex>
    </Container>
)
}

export default Navbar