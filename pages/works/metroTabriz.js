import {
    Container, Badge, Link, List,
    ListItem,
    SimpleGrid,
    UnorderedList, Box
} from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, AspectWorkImage } from "../../components/work";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import styled from "@emotion/styled";

const HoverBox = styled.div`
    &:hover{
        transform : translateY(-20px)
    }
`

const Work = () => {
    return (
        <Layout title='Metro Tabriz'>
            <Container mt={10}>
                <Title>
                    Metro Tabriz
                    <Badge>2022</Badge>
                </Title>
                <p>
                    Mobile Application to Facilitate Using the Tabriz Metro Railway
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Website</Meta>
                        <Link href='https://cafebazaar.ir/app/com.metrotabriz?l=en'>
                            Cafe Bazaar < ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Features</Meta>
                        <UnorderedList mt={4}>
                            <ListItem>Support multi languages (Internationalization and localization)</ListItem>
                            <ListItem>Splash screen</ListItem>
                            <ListItem>Find nearest station based on gps data</ListItem>
                            <ListItem>Implement custom drawer using react-navigation</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1, 2, 2]} alignContent='center' mt={10}>
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