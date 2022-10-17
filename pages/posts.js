import {Container, Heading, SimpleGrid} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'

const Posts = () => {
    return (
        <Layout title='Posts'>
            <Container>
                <Heading as='h4' fontSize={20} mb={4}>
                    Popular posts
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid column={[1,2,2]} gap={6}>
                        <GridItem title='My Fish Workflow'>

                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
            </Layout>
    )
    
}

export default Posts