import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const HeadingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: 'uppercase',
    // color:"black",
    padding: '4'
}

const Home = () => {
    return (
        <Box>

            <MyCarousel />

            <Container p={'16'} bgColor={""} maxWidth={"container.xl"} minHeight={"100vh"}>
                <Heading width={"fit-content"}
                    margin={'auto'} borderBottom={"2px solid"} textTransform={"uppercase"}>
                    Services
                </Heading>

                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}


                >

                    <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
                    <Text
                        letterSpacing={"widest"}
                        lineHeight={"190%"}
                        p={["4", "16"]}
                        textAlign={"center"}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis cumque facilis quod ipsa! Explicabo beatae vitae similique fugiat rerum sunt sit! Error, exercitationem? Facilis ratione, iusto obcaecati, quisquam enim ipsum, consequuntur voluptates nobis fuga magnam sequi culpa. Sunt exercitationem nisi voluptates ullam quia consequuntur reprehenderit temporibus aspernatur quae. Optio at quia, exercitationem delectus fuga eos minima debitis adipisci rem saepe vel asperiores. Autem doloremque, ut enim laudantium ratione amet sapiente esse praesentium eius harum. Ex sit, obcaecati dolores rerum aliquam numquam neque optio sequi repellendus amet, officiis, aperiam excepturi necessitatibus! Ipsam ex officiis voluptatem quos doloremque est animi aliquid.
                    </Text>
                </Stack>






            </Container>


        </Box>
    )
}


const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box width={'full'} height={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOptions}>
                Watch the future
            </Heading>

        </Box>


        <Box width={'full'} height={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...HeadingOptions}>
                Future is Gaming
            </Heading>

        </Box>

        <Box width={'full'} height={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...HeadingOptions}>
                Gaming on Console
            </Heading>

        </Box>


        <Box width={'full'} height={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingOptions}>
                Night gamers
            </Heading>

        </Box>





    </Carousel>
)

export default Home