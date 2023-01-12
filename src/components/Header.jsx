
import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack
} from '@chakra-ui/react'


import { Link } from "react-router-dom"
import { BiMenuAltLeft } from 'react-icons/bi'




const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                zIndex={10}
                pos={'fixed'}
                top={'4'}
                colorScheme={'purple'}

                onClick={onOpen}
                padding={'0'}
                width={'10'}
                borderRadius={"full"}
                h={'10'} left={'4'}><BiMenuAltLeft size={'20'} /></Button>



            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>


                        <Stack alignItems={'flex-start'}>

                            <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}> <Link to={'/'} >Home</Link></Button>
                            <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}> <Link to={'/videos'} >Videos</Link></Button>
                            <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}> <Link to={'/videos?category=free'} >Free Videos</Link></Button>
                            <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}> <Link to={'/upload'} >Upload Videos</Link></Button>

                        </Stack>


                        <Stack
                            position={'absolute'}
                            bottom={10}
                            alignItems={"center"}
                            left={0}
                            padding={""}
                            //  gap={"10px"}
                            justifyContent={"space-evenly"}
                            width={"full"} flexDirection={'row'}
                        >
                            <Button onClick={onClose} width={"40%"} colorScheme={"purple"}><Link to={"/login"} >Log In</Link></Button>
                            <Button onClick={onClose} width={"40%"} variant={"outline"} colorScheme={"purple"}><Link to={'/signup'}>Sign Up</Link></Button>



                        </Stack>

                    </DrawerBody>
                    <div>

                    </div>
                </DrawerContent>
            </Drawer>




        </>
    )
}

export default Header