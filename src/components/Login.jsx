import { Avatar, Box, Button, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Box >

      <Stack alignItems={"center"} justifyContent={'center'} flexDirection={'row'} minH={"70vh"} m={10} p={'0 4'}>

        <VStack gap={"20px"} w={'full'} h={"full"} alignItems={'center'} p={['1', '5']}>

          <VStack m={0} p={0}>

            <Text p={0} m={0} fontSize={["1rem", '2rem']} fontWeight={'black'}>
              Welcome Back
            </Text>
            <Text fontSize={['.7rem', '1rem']}>
              Glad you remembered us
            </Text>

           
          </VStack>

          <VStack w={'full'} gap={'20px'}>

            <VStack w={['full', "80%"]} gap={'20px'}>

              <Input required height={10} borderRadius={0} w={['full', '100%']} placeholder='Email' type="email" focusBorderColor={'none'} outline={'none'} border={0} borderBottom={'1px solid gray'} />
              <Input required height={10} borderRadius={0} w={['full', '100%']} placeholder='Password' type="password" focusBorderColor={'none'} outline={'none'} border={0} borderBottom={'1px solid gray'} />

              <Button variant={'link'} alignSelf={'flex-end'}>
                Forgot password?
              </Button>
            </VStack>
            <Button focusBorderColor={'purple'} h={'60px'} borderRadius={'full'} w={['full', '80%']} colorScheme={'facebook'}>
              <Link to={'/login'}>
                Log in
              </Link>
            </Button>
            <Button variant={'outline'} h={'60px'} borderRadius={'full'} w={['full', '80%']} colorScheme={'facebook'}>
              <Link to={'/signup'}>Register an Account</Link>
            </Button>


          </VStack>

        </VStack>

        <VStack w={['0', 'full']} height={'70vh'} justifyContent={'right'}>
          <Image height={'100%'} src='https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </VStack>

      </Stack>

    </Box>
  )
}

export default Login
