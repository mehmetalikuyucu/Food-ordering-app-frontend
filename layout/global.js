import Header from "../components/header";
import Footer from "../components/footer";
import { Box} from "@chakra-ui/react";

const Layout = ({children}) => {
  return (
    <><Header/>
      <Box as='main' px={[4, 6, 10, 14, 20]} maxW={"1440px"} mx='auto' bgColor={'#FBF2CF'}>
        {children}
      </Box>
      <Footer/>
    </>
  );
}

export default Layout