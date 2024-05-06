import React from 'react';
import { NextPage } from 'next';
import { Flex, Stack, Image, Text, HStack, BoxProps, Button, IconButton, Divider, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Box, Avatar } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navigator = function () {
  return (
    <Flex mb={'6.1rem'}>
      <Stack display={{ lg: 'block', md: 'none', sm: 'none', base: 'none' }}>
        <DesktopView />
      </Stack>
      <Stack display={{ lg: 'none', md: 'block', sm: 'block', base: 'block' }}>
        <MobileView />
      </Stack>
    </Flex>
  );
};

const LinkList = function ({ closeNav }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    const link = router.pathname;
    if (link === '/') setActiveLink('Home');
    if (link === '/#About_us') setActiveLink('Aboutus');
    if (link === '/#Teams') setActiveLink('Services');
    if (link === '/#contact') setActiveLink('Contact');
  }, []);
  return (
    <Flex
      // Link list
      gap={{ lg: '3rem', md: 10, sm: 10, base: 10 }}
      flexDir={{ lg: 'row', md: 'column', sm: 'column', base: 'column' }}
      alignItems={'left'}
    >
      <Flex
        onClick={() =>{ router.replace('/')
        closeNav()
  }
    } p={1} cursor={'pointer'} alignItems={'center'}
      >
        <Text 
        color={{lg:activeLink === 'Home' ? 'rgba(252, 172, 25, 1)' : 'rgba(169, 169, 169, 1)',base:'white'}}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        >
            Home
        </Text>
      </Flex>
      <Flex
        onClick={() => {router.replace('/#Aboutus'); closeNav()}}
        p={1}
        cursor={'pointer'}
        alignItems={'center'}
      >
        <Text 
        color={{lg:activeLink === 'About_us' ? 'rgba(252, 172, 25, 1)' : 'rgba(169, 169, 169, 1)',base:'white'}}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        >
            About us
        </Text>
      </Flex>
      <Flex
        onClick={() =>{ router.replace('/#Teams'); closeNav()}}
        p={1}
        cursor={'pointer'}
        alignItems={'center'}
      >
        <Text 
        color={{lg:activeLink === 'Teams' ? 'rgba(252, 172, 25, 1)' : 'rgba(169, 169, 169, 1)',base:'white'}}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        >
            Teams
        </Text>
      </Flex> 
    </Flex>
  );
};

const ButtonLinks = function ({closeNav}){
  const router =useRouter()
  return(
    <Flex
    // button container
    gap={6}
    flexDir={{lg:'row',md:'column',sm:'column',base:'column'}}
    >
      <Button
      m={{lg:'0 auto',base:'3rem 0'}}
      w={'fit-content'}
      bg={{lg:'rgba(252, 172, 25, 1)', base:'white'}}
      border={'1px solid white'}
      borderRadius={'50px'}
      padding={'2rem 4rem'}
      textColor={{lg:'black',base:'rgba(252, 172, 25, 1)'}}
      onClick={()=>{router.push('/#Contact'); closeNav()}}
      >
        Contact Us
      </Button>

    </Flex>
  )
}


// const MobileNav = function ({ displayNav, closeNav }) {
//   return (
//     <Flex padding={'3rem'}  position={'fixed'} background={'rgba(252, 172, 25, 1)'}  w={'100vw'} h={'1000vh'}  display={displayNav ? 'flex' : 'none'} flexDir={'column'} zIndex={6}>
//       <Flex marginLeft={'auto'} onClick={() => closeNav()}>
//         <IconButton color={'white'} size="lg" variant="ghost" aria-label="open menu" icon={<FaTimes />} />
//       </Flex>
//       <LinkList />
//       <ButtonLinks/>
//     </Flex>
//   );
// };
const MobileNav = function ({ displayNav, closeNav }) {
    return (
      <Flex padding={'3rem'}  position={'fixed'} background={'rgba(252, 172, 25, 1)'}  w={'100vw'} h={'1000vh'}  display={displayNav ? 'flex' : 'none'} flexDir={'column'} zIndex={6}>
        <Flex marginLeft={'auto'} onClick={() => closeNav()}>
          <IconButton color={'white'} size="lg" variant="ghost" aria-label="open menu" icon={<FaTimes />} />
        </Flex>
        <LinkList closeNav={closeNav} /> {/* Pass closeNav as a prop */}
        <ButtonLinks closeNav={closeNav}/>
      </Flex>
    );
  };

const DesktopView = function ({closeNav}) {
  return (
    <Flex
      // container
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}
      position={'absolute'}
      backgroundColor={'White'} 
    //   backdropFilter={'blur(10px)'} 
      zIndex={'1000'}
      pt={5}
      p={'2rem 6rem'}
    >
        <Image alt="img" src={'/Logo.svg'} />
        <LinkList closeNav={()=>{}} />
        <ButtonLinks closeNav={()=>{}}/>
    </Flex>
  );
};

const MobileView = function () {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  return (
    <Flex flexDir={'row'}>
      <Flex
        // container
        width={'100%'}
        pt={5}
        alignItems={'center'}
        justifyContent={'space-between'}
        position={'absolute'}
        backgroundColor={'white'} 
        backdropFilter={'blur(10px)'} 
        zIndex={5}
        p={2}
        
      >
        <Image alt="img" src={'/Logo.svg'} />
        <IconButton color="black" size="lg" variant="ghost" aria-label="open menu" icon={<FaBars />} onClick={() => setDisplayMobileMenu(true)}></IconButton>
      </Flex>

      <MobileNav displayNav={displayMobileMenu} closeNav={() => setDisplayMobileMenu(false)} />
    </Flex>
  );
};

export default Navigator;
