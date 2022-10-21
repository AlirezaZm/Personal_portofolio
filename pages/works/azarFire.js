import { Container, Badge, Link,List,
    ListItem,
 } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import Layout from "../../components/layouts/article";

// const HoverBox = styled.div`
//     &:hover{
//         transform : translateY(-20px)
//     }
// `

const Work = () => {
    return(
        <Layout title='Azar Fire'>
            <Container mt={10}>
                <Title>
                    Azar Fire dataset
                     <Badge ml={1}>2019</Badge>
                </Title>
                <p align='justify'>
                We provide a custom dataset to utilize in our published paper. The purpose of creating this dataset is to evaluate our method with a challenging condition and confirm its performance under this circumstance.
                </p>
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Website</Meta>
                        <span>
                                <Link href='http://aimlrl.azaruniv.ac.ir/databases/1'>
                                    Home< ExternalLinkIcon mx='2px'  />
                                </Link>
                            </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Used on</Meta>
                        <span>
                                <Link href='https://www.sciencedirect.com/science/article/abs/pii/S0957417419302490'>
                                    Paper&apos;s Link< ExternalLinkIcon mx='2px'  />
                                </Link>
                            </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Features</Meta>
                        <span>
                            One important feature of this dataset is that there is some fire-like object which can challenge the algorithm.
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work