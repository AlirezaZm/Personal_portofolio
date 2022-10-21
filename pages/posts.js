import {Container, Heading, Text} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
// import {GridItem} from '../components/grid-item'

const Posts = () => {
    return (
        <Layout title='Posts'>
            <Container mt={8}>
                <Heading as='h4' fontSize={25} mb={8}>
                    Popular posts
                </Heading>
                <Section delay={0.1}>
                    <Text align='center' fontSize='2xl' mt={20}>There is no post yet</Text>
                    {/* <SimpleGrid column={[1,2,2]} gap={6}>
                        <GridItem title='My Fish Workflow'>
                        </GridItem>
                    </SimpleGrid> */}
                </Section>
            </Container>
            </Layout>
    )
    
}

export default Posts