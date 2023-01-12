import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
function Upload() {
    return (
        <Container maxW={'container.xl'} height={['50vh',"100vh"]} padding={16}>

            <VStack color={'purple.500'} h={'full'} justifyContent={'center'} >
                <AiOutlineCloudUpload size={"10vmax"} />
                <form action="">
                    <HStack>
                        <Input required type={'file'}

                            css={{
                                '&::file-selector-button': {
                                    border: "none",
                                    width: "calc(100%%+36px)",

                                    height: "100%",
                                    marginLeft:'-18px',
                                    color:"purple",
                                    background:"white",
                                    cursor:"pointer"
                                }
                            }}
                        />

                        <Button colorScheme={'purple'} type='submit'>Upload</Button>
                    </HStack>
                </form>
            </VStack>

        </Container>
    )
}

export default Upload
