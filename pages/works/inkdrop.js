import { Container, Badge, Link,List,
    ListItem,
    SimpleGrid,
    UnorderedList, } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta, AspectWorkImage } from "../../components/work";
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title='Metro Tabriz'>
            <Container mt={10}>
                <Title>
                    Metro Tabriz
                     <Badge>2022</Badge>
                </Title>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            <ListItem>Support multi languages</ListItem>
                            <ListItem>Splash screen</ListItem>
                            <ListItem>Gps-based nearest station to user finder</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <SimpleGrid columns = {[1,1,2]}>
                    <AspectWorkImage alt='inkdrop' src='/images/works/metro.jpg' />
                    <AspectWorkImage alt='inkdrop' src='/images/works/live_location.jpg' />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Work