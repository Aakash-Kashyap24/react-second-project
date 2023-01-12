import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            minHeight={40}
            p={"16"}
            color={"white"}
        >


            <Stack direction={['column', "row"]} width={'full'}>


                <VStack alignItems={'stretch'} w={"full"} px={4}>
                    <Heading size={"md"} textAlign={['center' ,'left']} textTransform={"uppercase"}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid White'}
                        py={2}

                    >



                        <Input border={"none"}
                            borderRadius={'none'}
                            outline={"none"}
                            focusBorderColor='"none'
                            placeholder='Enter Email Here...' />

                        <Button
                            p={0}
                            colorScheme={"purple"}
                            variant={"ghost"}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20} />

                        </Button>
                    </HStack>

                </VStack>

                <VStack w={"full"}

                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid White"]}
                >
                    <Heading textTransform={"uppercase"} textAlign={"center"}  >
                        Video HUb

                    </Heading>
                    <Text>
                        @all right reserved
                    </Text>
                </VStack>

                <VStack w={"full"} gap={5}>
                    <Heading size={"md"} textTransform={"uppercase"} >
                        Social Media
                    </Heading>
                    <Button variant={"link"} colorScheme={"whiteAlpha.900"} >

                        <a target={'blank'} href="https://github.com/Aakash-Kashyap24">GIT HUB</a>
                    </Button>


                    <Button variant={"link"} colorScheme={"whiteAlpha.900"} >

                        <a target={'blank'} href="https://www.instagram.com/akash_uxd/">INSTAGRAM</a>
                    </Button>


                    <Button variant={"link"} colorScheme={"whiteAlpha.900"} >

                        <a target={'blank'} href="https://www.linkedin.com/in/akash-kumar-73b9211b3/">Linkdin</a>
                    </Button>

                </VStack>

            </Stack>

        </Box>
    )
}

export default Footer;