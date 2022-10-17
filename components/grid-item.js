import NextLink from 'next/link'
import Image from 'next/image'
import {Box,Text,LinkBox,LinkOverlay, useColorModeValue} from '@chakra-ui/react'
import { Global } from '@emotion/react'


export const GridItem = ({children,href,title,thumbnail}) => {
    return (
        <Box w='100%' align='center'>
            <LinkBox cursor='pointer'>
                <Image 
                    src={thumbnail}
                    alt={title}
                    className='grid-item-thumbnail'
                    placeholder='blur'
                    loading='lazy'
                />
                <LinkOverlay>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSiz={14}>
                    {children}
                </Text>
            </LinkBox>
        </Box>
    )
}

export const WorkGridItem = ({children,id,title}) => {
    return (
        <Box w='100%' align='center'>
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor='pointer'>
                    <Box
                    bg = {useColorModeValue('#ffffff40','#20202380')}
                    style = {{backdropFilter: 'blur(10px)',display:'flex',
                    flexDirection:'column',justifyContent:'space-between',
                    padding:'20px 20px',height:'150px'}}
                    borderRadius = {10}
                    >
                    <LinkOverlay href={`/works/${id}`} >
                            <Text mt={2} fontSize={20}>
                                {title}
                            </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>{children}</Text>
                    </Box>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => {
    <Global
     styles={`
        .aa{
            background-color: red
        }
     `}
    />
}