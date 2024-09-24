import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";


const HomePage = () => {

 const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
  console.log("products:", products);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
                fontSize={"30"}
                fontWeight={'bold'}
                textAlign ={"center"}
                bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                bgClip={'text'}
              >
              Current Product
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3
            }}
            spacing={10}
            w={"full"}
          >
            
            {/* {products.map((product)=>(
              <ProductCard key={product._id} product={product} />
            ))} */}


          </SimpleGrid>

        <Text fontSize="xl" textAlign={'center'} fontWeight='bold' color='gray.500'>
          No Product found {" "} 
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage