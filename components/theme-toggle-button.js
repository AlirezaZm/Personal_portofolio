import {IconButton, useColorMode,useColorModeValue} from '@chakra-ui/react'
import {SunIcon,MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
                style={{display:'inline-block'}}
                key={useColorModeValue('light','dark')}    
                initial = {{y:-10, opacity:0}}
                animate = {{y:0,opacity: 1}}
                exit = {{y:10, opacity:0}}
                duration = {{duration: 0.2}}
            >
                <IconButton 
                    aria-label='Toggle theme'
                    colorScheme = {useColorModeValue('orange','purple')}
                    onClick = {toggleColorMode}
                    icon = {useColorModeValue(<SunIcon />,<MoonIcon />)}
                />
            </motion.div>
        </AnimatePresence>
       
    )
}

export default ThemeToggleButton

