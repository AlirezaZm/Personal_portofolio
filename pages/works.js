import {Container,Heading,SimpleGrid} from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Works  = () => {
    return (
        <Layout>
            <Container mt={10}>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[2,2,2]} gap={8}>
                    <Section>
                        <WorkGridItem id='inkdrop' title='Metro Tabriz'>
                            A android-based app made for tabriz metro system
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id='inkdrop' title='inkDrop' >
                            A markdown note-taking app
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works