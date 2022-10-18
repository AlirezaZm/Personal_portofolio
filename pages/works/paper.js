import React from 'react'
import { Container, Badge, Link,List,
    ListItem,
    SimpleGrid,
    UnorderedList, Box } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, AspectWorkImage } from "../../components/work";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import  styled  from "@emotion/styled";
import axios from 'axios';

const HoverBox = styled.div`
    &:hover{
        transform : translateY(-20px)
    }
`

const Work = () => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
          }
    }
    React.useEffect(() => {
        axios.get('https://www.sciencedirect.com/journal/expert-systems-with-applications',config)
        .then(response => console.log(response))
        .catch(err => console.log(err)) 
    })
    return(
        <Layout title='Metro Tabriz'>
            <Container mt={10}>
                <Title>
                    Metro Tabriz
                     <Badge>2022</Badge>
                </Title>
                <p>
                Lorem Ipsum is simply dummy text of the printing 
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Website</Meta>
                        <Link href='https://cafebazaar.ir/app/com.metrotabriz?l=en'>
                            Cafe Bazaar < ExternalLinkIcon mx='2px'  />
                        </Link>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Features</Meta>
                        <UnorderedList  mt={4}>
                            <ListItem>Support multi languages (Internationalization and localization)</ListItem>
                            <ListItem>Splash screen</ListItem>
                            <ListItem>Find nearest station based on gps data</ListItem>
                            <ListItem>Implement custom drawer using react-navigation</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <SimpleGrid columns = {[1,2,2]} alignContent='center' mt={10}>
                    <Box align='center' w='100%' >
                        <Section>
                            <HoverBox>
                                <AspectWorkImage alt='inkdrop' src='/images/works/metro.jpg' />
                            </HoverBox>
                        </Section>
                    </Box>
                    <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <AspectWorkImage alt='inkdrop' src='/images/works/live_location.jpg' />
                            </HoverBox>
                        </Section> 
                    </Box>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Work