import Header from "../components/header";
import { Box} from "@chakra-ui/react";

const Layout = ({children}) => {
  return (
    <><Header/>
      <Box as='main' px={[4, 6, 10, 14, 20]} maxW={"1440px"} mx='auto'>
        {children}
      </Box>
    </>
  );
}

export default Layout