import Logo from './logo'
import NextLink from 'next/link'

import ThemeToggleButton from './theme-toggle-button'

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({href,path,children}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p = {2}
                bg = {active ? 'grassTeal' : undefined}
                color = {active ? 'white': inactiveColor}
                borderRadius = {8}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    const bgColor = useColorModeValue('#ffffff40','#20202380')
    return (
        <Box
            position = 'fixed'
            as = 'nav'
            w = '100%'
            bg = {bgColor}
            style = {{backdropFilter: 'blur(10px)'}}
            zIndex = {1}
            {...props}
        >
            <Container
                display = 'flex'
                p = {2}
                maxW = 'container.md'
                wrap = 'wrap'
                align = 'center'
                justify = 'space-between'
            >
                <Flex align = 'center' mr={5}>
                    <Heading
                        as='h1'
                        size = 'lg'
                        letterSpacing = {'tighter'}
                    >
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction = {{base: 'column', md:'row'}}
                    display = {{base: 'none',md:'flex'}}
                    width = {{base:'full',md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                >
                    <LinkItem href='/works' path = {path}>
                        Works
                    </LinkItem>
                    <LinkItem href='/posts' path = {path}>
                        Posts
                    </LinkItem>
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base:'inline-block' ,md:'none'}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon/>}
                                variant='outline'
                                aria-label='options'
                            /> 
                            <MenuList>
                                <NextLink href='/works' passHref>
                                    <MenuItem as={Link} >
                                        Works
                                    </MenuItem>
                                </NextLink>
                                <NextLink href='/posts' passHref>
                                    <MenuItem as={Link} >
                                        Posts
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar