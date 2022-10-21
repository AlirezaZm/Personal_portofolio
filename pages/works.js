import {Container,Heading,SimpleGrid} from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Works  = () => {
    return (
        <Layout>
            <Container mt={8}>
                <Heading as='h3' fontSize={25} mb={8}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,2,2]} gap={8}>
                    <Section>
                        <WorkGridItem id='metroTabriz' title='Metro Tabriz'>
                            A android-based app made for tabriz metro system
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id='azarFire' title='Azar Fire' >
                            A custom dataset for fire detection based on surveillance cameras
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id='paper' title='paper' >
                            Fire detection for video surveillance applications using ICA K-medoids-based color model and efficient spatio-temporal visual features
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works