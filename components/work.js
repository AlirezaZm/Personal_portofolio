import NextLink from 'next/link'
import { Heading, Box,  Link, Badge} from '@chakra-ui/layout'
import { Image,AspectRatio } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => {
    return (
        <Box>
            <NextLink href='/works'>
                <Link>Works</Link>
            </NextLink>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading 
                display='inline-block'
                as='h3'
                fontSize={20}
                mb={4}
            >
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({src,alt}) => {
    return (
        <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
    )
}

export const AspectWorkImage = ({src,alt}) => {
    return (
        <AspectRatio maxW="200px" ratio={0.5} my={4}>
            <Image   borderRadius='lg' w='full' src={src} alt={alt} mb={4}  />
        </AspectRatio>
    )
}

export const Meta = ({children})  => {
    return (
        <Badge colorScheme='green' mr={2}>
            {children}
        </Badge>
    )
}