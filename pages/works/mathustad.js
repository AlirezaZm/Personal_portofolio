import {
    Container, Badge, Link, List,
    ListItem,
    SimpleGrid,
    UnorderedList, Box
} from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, CustomizeAspectWorkImage } from "../../components/work";
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
        <Layout title='Mathustad'>
            <Container mt={10}>
                <Title>
                    Mathustad
                    <Badge>2022-2023</Badge>
                </Title>
                <p>
                    A math content teaching platform
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web Application</span>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Role:</Meta>
                        <span>Full stack developer</span>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Website</Meta>
                        <Link href='https://mathustad.org'>
                            Mathustad < ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Skills achievement</Meta>
                        <UnorderedList mt={4}>
                            <ListItem>Amazon S3 bucket</ListItem>
                            <ListItem>Heroku</ListItem>
                            <ListItem>Sniper link implementation</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Technologies</Meta>
                        <UnorderedList mt={4}>
                            <ListItem>React</ListItem>
                            <ListItem>Express Js</ListItem>
                            <ListItem>MongoDB</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1, 1, 1]} alignContent='center' mt={10}>
                    <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <CustomizeAspectWorkImage maxW='500px' ratio={2} alt='inkdrop' src='/images/works/mathustad_homepage.png' />
                            </HoverBox>
                        </Section>
                    </Box>
                    <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <CustomizeAspectWorkImage maxW='500px' ratio={2} alt='inkdrop' src='/images/works/mathustad_articledetail.PNG' />
                            </HoverBox>
                        </Section>
                    </Box>
                    <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <CustomizeAspectWorkImage maxW='500px' ratio={2} alt='inkdrop' src='/images/works/mathustad_login.PNG' />
                            </HoverBox>
                        </Section>
                    </Box>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Work