// import Image from "next/image";
import { Inter } from "next/font/google";
import Navigator from "./components/navigator";
import { Flex,Heading ,Box,Text,Button,Image,UnorderedList,ListItem,Input,Select,Textarea,Checkbox} from "@chakra-ui/react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Flex flexDir={'column'}>
    <Navigator></Navigator>
    {/* section 1 */}
    <Flex
      position="relative"
      width="100%"
      padding={{lg:"1rem 6rem",base:"2rem 0"}}
      // height="100vh" // Adjust the height as needed
      // justifyContent="center"
      alignItems="center"
      mt={{lg:'4rem',base:'0rem'}}
      flexDir={{lg:"row",base:"column"}}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/2.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="blur(8px)" // Adjust the blur intensity as needed
        zIndex="-1"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="linear-gradient(rgba(0, 0, 102, 0.42), rgba(0, 0, 102, 0.42))"
        zIndex="-1"
      />

      <Flex flexDir={'column'} gap={'1rem'} color={'white'} textAlign={{lg:'left',base:'center'}} width={{lg:'50%',base:'100%'}} >
        <Heading fontSize={{lg:'50px'}}>We are your Partners, </Heading>
        <Heading fontSize={{lg:'50px'}}> here to help you grow</Heading>
        <Heading color={'rgba(252, 172, 25, 1)'} fontSize={{lg:'50px'}}>the right way</Heading>
        <Text fontSize={{lg:'25px'}}>Enterprise-grade resources for </Text>
        <Text fontSize={{lg:'25px'}}>small and mid-size SAAS </Text>
        <Text fontSize={{lg:'25px'}}> companies looking to grow</Text>
        <Text fontSize={{lg:'25px'}}> faster with minimal risk</Text>
        <Button
            m={{lg:'2rem 0',base:'1rem auto'}}
            w={'fit-content'}
            bg={{lg:'rgba(252, 172, 25, 1)', base:'white'}}
            border={'1px solid white'}
            borderRadius={'50px'}
            padding={'2rem 4rem'}
            textColor={{lg:'black',base:'rgba(252, 172, 25, 1)'}}
            onClick={()=>router.push('/#contact')}
      >
        Contact Us
      </Button>
      </Flex>

      <Flex w={{lg:'50%',base:'100%'}}>
        <Image src={'/picHero.svg'}></Image>
      </Flex>
    </Flex>

    {/* section 2 */}
    <Flex id="Aboutus" textAlign={'center'}flexDir={'column'} padding={{lg:'2rem 6rem',sm:'2rem 1rem'}}>
      <Heading color={'rgba(25, 23, 105, 1)'} mt={{lg:'1rem',base:'3rem'}}>About</Heading>
      <Text padding={{lg:'3rem',base:'1rem'}} fontSize={'23px'}>Squord Equity Partners is a founder-driven private equity firm specializing in early growth stage enterprise software companies. With a focus on innovation and collaboration, we're dedicated to empowering visionary founders and fueling their success. At Squord, we're not just investors - we're partners, mentors, and advocates. We believe in the power of teamwork and the potential of every entrepreneur. Together, we're shaping the future of the enterprise software industry, one partnership at a time.</Text>

    </Flex>

    {/* section 3 */}
    <Flex flexDir={'column'} textAlign={'center'} padding={{lg:'2rem 6rem',sm:'2rem 1rem'}}>
    <Heading color={'rgba(25, 23, 105, 1)'} mt={{lg:'1rem',base:'3rem'}} mb={'3rem'}>Services</Heading>
    <Flex justifyContent={'space-between'} flexDir={{lg:'row',base:'column'}} gap={'2rem'}>
       <Flex flexDir={'column'} padding={'30px'} m={{base:'2rem auto'}}  width={{lg:'20%',base:'80%'}} backgroundColor={'rgba(245, 245, 245, 1)'} borderRadius={'24px'}>
          <Heading  textAlign={'left'} fontWeight={'400'}>Acquisitions / Buyouts</Heading>
          <Text textAlign={'left'}>acquisition of a company's controlling interest</Text>
       </Flex>
       <Flex flexDir={'column'} padding={'30px'} m={{base:'2rem auto'}}  width={{lg:'20%',base:'80%'}} backgroundColor={'rgba(245, 245, 245, 1)'} borderRadius={'24px'}>
          <Heading textAlign={'left'} fontWeight={'400'}>Squord Consulting</Heading>
          <Text textAlign={'left'}>Financial Due Diligence, Technology Due Diligence</Text>
       </Flex>
       <Flex flexDir={'column'} padding={'30px'} m={{base:'2rem auto'}}  width={{lg:'20%',base:'80%'}} backgroundColor={'rgba(252, 172, 25, 1)'} borderRadius={'24px'}>
          <Heading textAlign={'left'} fontWeight={'400'} color={'white'}>Get Started</Heading>
          <Text textAlign={'left'}>acquisition of a company's controlling interest</Text>
          <Button w={'fit-content'} borderRadius={'24px'} mt={'1rem'} background={'white'} color={'rgba(252, 172, 25, 1)'}>Contact</Button>
       </Flex>
    </Flex>
    </Flex>


{/* section 4 */}
<Flex flexDir={'column'} padding={{base:'1rem'}} >
<Flex flexDir={{lg:'row',base:'column'}} alignItems={'center'}>
  <Flex width={{lg:'50%',base:'100%'}}>
  <Image src={'/str.svg'}></Image>
  </Flex>
  <Flex flexDir={'column'} width={{lg:'50%',base:'100%'}} padding={{lg:'3rem'}}>
    <Heading color={'rgba(25, 23, 105, 1)'}> Enterprise Software Focus:</Heading>
    
    <Flex mt={'3rem'} gap={'1rem'}>
      <Image src={'/check.svg'}></Image>
      <Text padding={'2rem 0'}>We focus on early growth stage enterprise software companies with an opportunity to grow and scale in an ever-growing sector.Past/current partners…</Text>
    </Flex>
  </Flex>

  </Flex>
  <Flex justifyContent={'space-between'} overflowX="auto" width="100%" padding={'2rem 3rem'} background={'rgba(249, 249, 249, 1)'}>
     <Image src={"/brand1.svg"}></Image>
     <Image src={"/brand1.svg"}></Image>
     <Image src={"/brand1.svg"}></Image>
     <Image src={"/brand1.svg"}></Image>
  </Flex>


</Flex>

{/* section 5 */}

<Flex id="Teams" padding={'2rem 6rem'} flexDir={'column'} textAlign={'center'}>

<Heading id="Team" color={'rgba(25, 23, 105, 1)'} mb={{lg:'6rem',base:'3rem'}} mt={{lg:'1rem',base:'3rem'}}>Team</Heading>
<Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'}>
  <Box>
    <Image src={'/edosapic.svg'}></Image>
    <Text fontSize={{lg:'28px',base:'18px'}} fontWeight={'500'}>Edosa Obaseki, CFA</Text>
    <Text fontWeight={'500'}>Managing Partner</Text>
    <Image m={'1rem auto'} src={'/Link.svg'}></Image>
  </Box>
  <Box>
    <Image src={'/dapopic.svg'}></Image>
    <Text fontSize={{lg:'28px',base:'18px'}} fontWeight={'500'}>Edosa Obaseki, CFA</Text>
    <Text fontWeight={'500'}>Managing Partner</Text>
    <Image m={'1rem auto'} src={'/Link.svg'}></Image>
  </Box>
</Flex>

</Flex>

{/* section 6 */}
<Box  backgroundColor={'rgba(253, 141, 26, 0.2)'} padding={{lg:'4rem',base:'1rem'}} pb={{lg:'12rem',base:'2rem'}}>
   <Heading color={'rgba(0, 0, 102, 1)'} margin={'2rem 0'} textAlign={'center'} w={'100%'}>Why partner with Us</Heading>
   <Flex flexDir={{lg:'row', base:'column'}} justifyContent={'space-between'} w={{lg:'60%',base:'100%'}} m={'0 auto'}>
    <UnorderedList w={{lg:'50%',base:'100%'}}>
      <ListItem mt={'1rem'}>Significant cash up front </ListItem>
        <ListItem mt={'1rem'}>Transfer risk to SEP</ListItem>
           <ListItem mt={'1rem'}>Capital access for rapid expansion</ListItem>
             <ListItem mt={'1rem'}> Stay involved within your current role</ListItem>
    </UnorderedList>
    <UnorderedList  w={{lg:'50%',base:'100%'}}>
      <ListItem mt={'1rem'} >Significant cash up front Transfer risk to SEP Capital access for rapid expansion.</ListItem>
      <ListItem mt={'1rem'}> Stay involved within your current role</ListItem>
      <ListItem mt={'1rem'}>Long-term stability for growth</ListItem>
    </UnorderedList>
   </Flex>
</Box>
{/* abstrctbimage */}
<Flex padding={'0 6rem'} mt={'-7rem'} display={{lg:'flex',base:'none'}}>
<Image src={'/partners.svg'}></Image>
</Flex>


{/* section 7 */}
<Flex id="Contact" p={{lg:'6rem',base:'2rem'}} flexDir={{lg:'row',base:'column'}}>
  <Flex  p={{lg:'4rem',base:''}} w={{lg:'50%',base:'100%'}} flexDir={'column'}>
    <Heading color={'rgba(80, 80, 80, 1)'}>Send us a message</Heading>
    <Text>Our friendly team would love to hear from you.</Text>
    <Input mt={'1rem'} placeholder="Become a Partner or Have a Question?" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Input>
    
    <Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'}>
    <Input w={{lg:'45%',base:'100%'}} mt={'1rem'} placeholder="First name" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Input>
    <Input w={{lg:'45%',base:'100%'}} mt={'1rem'} placeholder="Last name" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Input> 
    </Flex>

    <Input mt={'1rem'} placeholder="Email eg. you@company.com" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Input>

    <Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'}>
    <Input w={{lg:'45%',base:'100%'}} mt={'1rem'} placeholder="Phone Number" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Input>
    <Select w={{lg:'45%',base:'100%'}} mt={{lg:'0',base:'1rem'}} h={'3rem'} borderRadius={'16px'} p={'2rem 0'} background={'rgba(245, 245, 245, 1)'}>
      <option>Select</option>
      </Select> 
    </Flex>

    <Textarea draggable={'false'} h={'8rem'} mt={'1rem'} placeholder="message" borderRadius={'16px'} p={'2rem'} background={'rgba(245, 245, 245, 1)'}></Textarea>

   <Flex gap={'1rem'} mt={'1rem'}>
    <Checkbox></Checkbox>
    <Text>You agree to our friendly privacy policy.</Text>
   </Flex>

   <Button m={'1rem 0'} borderRadius={'25px'} p={'2rem'} background={'rgba(252, 172, 25, 1)'} color={'black'}>Send Message </Button>
    
  </Flex>
  <Flex  w={{lg:'50%',base:'100%'}} flexDir={'column'}>
        <Flex flexDir={'column'} padding={'30px'} m={{base:'2rem auto'}}  width={{lg:'50%',base:'90%'}} backgroundColor={'rgba(245, 245, 245, 1)'} borderRadius={'24px'}>
          <Image src={'/msg.svg'} w={{lg:'80px',base:'60px'}} mb={'2rem'}></Image>
          <Heading  textAlign={'left'} color={'rgba(80, 80, 80, 1)'} fontWeight={'700'}>Chat with sales</Heading>
          <Text textAlign={'left'} color={'rgba(80, 80, 80, 1)'}>Speak to our friendly team.</Text>
          <Text color={'rgba(80, 80, 80, 1)'} mt={'2rem'}>info@squord.com</Text>
       </Flex>

       <Flex flexDir={'column'} padding={'30px'} m={{base:'2rem auto'}}  width={{lg:'50%',base:'90%'}} backgroundColor={'rgba(245, 245, 245, 1)'} borderRadius={'24px'}>
          <Image src={'/tel.svg'} w={{lg:'80px',base:'60px'}} mb={'2rem'}></Image>
          <Heading  textAlign={'left'} color={'rgba(80, 80, 80, 1)'} fontWeight={'700'}>Call us</Heading>
          <Text textAlign={'left'} color={'rgba(80, 80, 80, 1)'}>Mon-Fri from 8am to 5pm.</Text>
          <Text color={'rgba(80, 80, 80, 1)'} mt={'2rem'}>(512) 650-9185</Text>
       </Flex>
  </Flex>
</Flex>

{/* section 8 */}
<Flex flexDir={'column'} padding={{lg:'2rem 6rem',base:'1rem'}} gap={'2rem'} background={'rgba(245, 245, 245, 1)'}>
<Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'} pb={'2rem'} borderBottom={'1px solid rgba(169, 169, 169, 1)'}>
  <Box mt={'2rem'}>
    <Heading color={'rgba(169, 169, 169, 1)'}>We are your Partners, here </Heading>
    <Heading color={'rgba(169, 169, 169, 1)'}>to help you grow the right </Heading>
    <Heading color={'rgba(169, 169, 169, 1)'}> way</Heading>
  </Box>
  <Box mt={'2rem'}>
    <Text color={'rgba(169, 169, 169, 1)'} fontSize={'20px'}>Enterprise-grade resources for small and mid-size</Text>
    <Text color={'rgba(169, 169, 169, 1)'} fontSize={'20px'}> companies looking to grow faster</Text>
    <Text color={'rgba(169, 169, 169, 1)'} fontSize={'20px'}> with minimal risk</Text>
    <Button color={'black'} background={'rgba(252, 172, 25, 1)'} mt={'2rem'} borderRadius={'24px'}> Learn More </Button>
  </Box>
</Flex>

<Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'} alignItems={{lg:'center',base:'left'}}>
  <Box>
    <Image src="/footerLogo.svg"></Image>
  </Box>
  <Box>
    <Text mt={{lg:'0',base:'1rem'}}>Home</Text>
    <Text mt={{lg:'0',base:'1rem'}}>About us</Text>
  </Box>
  <Box>
    <Text mt={{lg:'0',base:'1rem'}}>Get Started</Text>
    <Text mt={{lg:'0',base:'1rem'}}>FAQs</Text>
  </Box>
  <Box>
    <Text mt={{lg:'0',base:'1rem'}}>Socials</Text>
   <Flex ml={'-1rem'}>
    <Image src={'/fb.svg'}></Image>
    <Image src={'/x.svg'}></Image>
    <Image src={'/yt.svg'}></Image>
    <Image src={'/li.svg'}></Image>
   </Flex>
  </Box>

</Flex>

<Flex flexDir={{lg:'row',base:'column'}} mt={{lg:'3rem',base:'2rem'}} gap={'2rem'}>
  <Text>@ 2023 UGC. All rights reserved.</Text>
  <Flex gap={'1rem'}>
  <Text>Privacy Policy</Text>
  <Text>Terms of Service</Text>
  <Text>Cookies Settings</Text>
  </Flex>
</Flex>

</Flex>




   </Flex>
  );
}
