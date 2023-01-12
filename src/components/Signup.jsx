import { Avatar, Box, Button, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <Box >
            {/* <Heading
                position={'relative'}
                top={'5'}

                w={'fit-content'} m={"0 auto"}>Register</Heading> */}
            <Stack alignItems={"center"} justifyContent={'center'} flexDirection={'row'} minH={"70vh"} m={10} p={'0 4'}>

                <VStack gap={"20px"} w={'full'} h={"full"} alignItems={'center'} p={['1', '5']}>

                    <VStack m={0} p={0}>

                        <Text p={0} m={0} fontSize={["1rem", '2rem']} fontWeight={'black'}>
                            Create an Account
                        </Text>
                        <Text fontSize={['.7rem', '1rem']}>
                            Let's get started with your 30 day free trail
                        </Text>
                        <Avatar alignSelf={'center'} boxSize={32}/>

                    </VStack>

                    <VStack w={'full'} gap={'20px'}>

                        <Input height={10} borderRadius={0} w={['full', '80%']} placeholder='Name' required focusBorderColor={'none'} type={'name'} outline={'none'} border={0} borderBottom={'1px solid gray'} />
                        <Input height={10} borderRadius={0} w={['full', '80%']} placeholder='Email' required type={'email'} focusBorderColor={'none'} outline={'none'} border={0} borderBottom={'1px solid gray'} />
                        <Input height={10} borderRadius={0} w={['full', '80%']} placeholder='Password' type={"password"} required focusBorderColor={'none'} outline={'none'} border={0} borderBottom={'1px solid gray'} />

                        <Button h={'60px'} borderRadius={'full'} w={['full', '80%']} colorScheme={'facebook'}>
                            Create An  Account
                        </Button>

                        <Button variant={'outline'} focusBorderColor={'purple'} h={'60px'} borderRadius={'full'} w={['full', '80%']} colorScheme={'facebook'}>
                            <Link to={'/login'}>
                                Log in
                            </Link>
                        </Button>

                    </VStack>

                </VStack>

                <VStack w={['0', 'full']} height={'70vh'} justifyContent={'right'}>
                    <Image height={'100%'} src='https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600' />
                </VStack>

            </Stack>

        </Box>
    )
}

export default Signup
