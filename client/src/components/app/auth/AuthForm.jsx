import {Box,Flex,Image,Text,VStack} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login"
import Signup from "./SignUp"
import GoogleAuth from "./GoogleAuth"

const AuthForm = () => {
    const [isLogin, setIsLogin]  = useState(true);
    return (
       <>
        <Box>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram logo" />
                { isLogin ? <Login/> : <Signup/>}

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                    <Text mx={1}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} ></Box>
                </Flex>
                <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
            </VStack>
        </Box>
        <Box border={"1px solid gray"} borderRadius={4} padding={5} >
            <Flex>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account?": "Already have an account?"}
                </Box>
                <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? "Sign up" : "Log in"}
                </Box>
            </Flex>
        </Box>
       </>
    )
}

export default AuthForm