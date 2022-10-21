import { Container, Badge, Link,List,
    ListItem,
    SimpleGrid,
    Text,
     Box } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, CustomizeAspectWorkImage } from "../../components/work";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import  styled  from "@emotion/styled";

const HoverBox = styled.div`
    &:hover{
        transform : translateY(-20px)
    }
`

const Work = () => {
    return(
        <Layout title='Metro Tabriz'>
            <Container mt={10}>
                <Title>
                    Paper
                     <Badge>2019</Badge>
                </Title>
                <p>
                    A paper based on fire detection using surveillance camera videos which published on 
                    Expert Systems with Applications.
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Title</Meta>
                        <span>Fire detection for video surveillance applications using ICA K-medoids-based color model and efficient spatio-temporal visual features</span>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Website</Meta>
                        <Link href='https://www.sciencedirect.com/science/article/abs/pii/S0957417419302490' isExternal={true}>
                            Link to publisher webiste < ExternalLinkIcon mx='2px'  />
                        </Link>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Website</Meta>
                        <Link href='https://www.sciencedirect.com/journal/expert-systems-with-applications' isExternal={true}>
                            Journal home page < ExternalLinkIcon mx='2px'  />
                        </Link>
                    </ListItem>
                    <ListItem mt={4}>
                        <Meta>Abstract</Meta>
                        <Text align='justify'>Automated detection of fire flames in videos shot from a surveillance camera is an active research topic, as fire detection must be accurate and fast. The present study proposes and evaluates an efficient fire detection method. The contributions of this method lies in threefold: (1) a robust ICA (Imperialist Competitive Algorithm) K-medoids-based color model first is developed to reliably detect all candidate fire regions in a scene; (2) a motion-intensity-aware motion detection technique is introduced to simply extract the regions containing movement together with the motion intensity rate of every moving pixel, which are then used to analyze the characteristics of the fire; (3) a set of new spatio-temporal features having the distinct characteristics of fire flames are extracted from the candidate fire regions which are fed into a support vector machine classifier in order to distinguish real fire regions from non-real ones. The experimental results for a set of benchmark fire video datasets and videos provided in this research confirm that the proposed method outperforms state-of-the-art fire detection approaches, providing high detection accuracy and a low false detection rate.</Text>
                    </ListItem>
                    
                </List>
                <SimpleGrid columns = {[1,1,1]} alignContent='center' mt={10}>
                <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <CustomizeAspectWorkImage maxW='500px' ratio={1.5} alt='inkdrop' src='/images/works/paper.png' />
                            </HoverBox>
                        </Section> 
                    </Box>      
                    <Box align='center' w='100%'>
                        <Section>
                            <HoverBox>
                                <CustomizeAspectWorkImage maxW='500px' ratio={1.5} alt='inkdrop' src='/images/works/paper1.png' />
                            </HoverBox>
                        </Section> 
                    </Box>      
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Work