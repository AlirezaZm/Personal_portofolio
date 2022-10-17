import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    ListItem,
    Link,
    Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'


import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {introduction} from '../constant/introduction'
import { BioSection, BioYear } from '../components/bio'
import TextLink from '../components/textLink'
import Layout from '../components/layouts/article'
import {socialNetwok} from '../constant/socialNetwork'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box mt={{base:7}} borderRadius='lg' bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align='center'>
                    Hello, I &#39;m a full-stack developer from Tabriz, Iran
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexFlow={1}>
                        <Heading as='h2' variant='page-title'>
                            Alireza Zademehdi
                        </Heading>
                        <p>Android developer - Data scientist</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base:4,md:0}} 
                        ml={{md:6}} 
                        align='center'
                    >
                        <Image 
                            borderColor='whiteAlpha.800' 
                            borderWidth={2} 
                            borderStyle = 'solid'
                            maxWidth='100px'
                            display='inline-block'
                            borderRadius='full'
                            src = '/images/my_img2.jpg'
                            alt = 'Profile Image'
                        />
                    </Box>
                </Box>
                <Section delay={0.1}> 
                    <Heading as='h3' variant='section-title'>
                        Brief Description
                    </Heading>
                    <Paragraph>{introduction}</Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/works'>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal' >
                                My portofolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Born in Tabriz, Iran
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Completed the Bachelor&#39;s program at <TextLink href='https://tabrizu.ac.ir/en'>University of Tabriz</TextLink>
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed the Master&#39;s Program at <TextLink href='http://en.azaruniv.ac.ir/'>Azarbaijan Shahid Madani University
                        </TextLink> in the field of Artificial Intelligence
                    </BioSection>
                    <BioSection>
                        <BioYear>2016 - Now</BioYear>
                        Freelancer
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        Social Netwoks
                    </Heading>
                    <List>
                       {socialNetwok.map((item) => {
                           return(
                                <ListItem key={item.title}>
                                    <Link href={item.address} target='_blank' >
                                        <Button  variant='ghost' colorScheme='teal'
                                            leftIcon={<Icon as={item.icon}  />}
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                </ListItem>
                           )
                       })}
                    </List>
                </Section>
                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Languages
                    </Heading>
                    <SimpleGrid columns={{sm: 2, md: 3}} spacingX='20px' spacingY='20px'>
                        <BioSection>
                            <BioYear>English</BioYear>
                            Proficient
                        </BioSection>
                        <BioSection>
                            <BioYear>Turkish</BioYear>
                            Native
                        </BioSection>
                        <BioSection>
                            <BioYear>Persian</BioYear>
                            Native
                        </BioSection>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
