import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const TextLink = ({children,href='/'}) => {
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link>{children}</Link>
          </NextLink>
    )
}
export default TextLink