import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        left: 5,
        bottom: 5,
        right: 5
      }}
      align="center"
      opacity={0.4}
      fontSize="sm"
    >
      &copy; {new Date().getFullYear()} Joseph Stout. All Rights Reserved.
    </Box>
  )
}

export default Footer
