import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from './helper/images';

import {StatusBar, TouchableOpacity} from 'react-native';
import {Colors} from './helper/constants';
import {Container, ImageWrap} from './helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from './helper/element';
import Feather from 'react-native-vector-icons/Feather';
import { onChange } from 'react-native-reanimated';
import { setState } from 'jest-circus';

export const Login = props => {
  
 const[hideCode, setHidecode]=useState(false)
  return (
    <Container flex={1}  >
     <Container
      height={30}
      width={100}
       verticalAlignment={'center'}
      horizontalAlignment={'center'}
     
      marginTop={10}
     >
     <ImageWrap
            source={AppIcons.applogo}
            height={70}
            width={70}
            fit={'contain'}
           />

     </Container>
      <Container
       height={10}
      width={100}
       verticalAlignment={'center'}
      horizontalAlignment={'center'}
      
      marginTop={7}
      >
      <TextInputBox
   height={8}
   width={80}
   placeholder={'Email'}
  
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
  borderColor={Colors.appInnerborder}
   size={15}
   borderRadius={4}
   borderWidth={1}
  >
   
  </TextInputBox> 
      </Container>
      <Container
       height={10}
      width={100}
       verticalAlignment={'center'}
      horizontalAlignment={'center'}
      
      paddingRight={2}
      marginBottom={2}
      >
      <TextInputBox
   height={8}
   width={80}
   placeholder={'Password'}
  
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   borderColor={Colors.appInnerborder}
   borderRadius={4}
   borderWidth={1}
   size={15}
   secure={hideCode}
   rightIcon={'lock'}
   press={()=>  setHidecode(!hideCode)}
   
   >
   <Container
    height={7}
   width={10}
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
  >
   <Feather
                  name="eye-off"
                  color={ Colors.appTextGrey
                  }
                  size={20}
                  
                /> 
                </Container>
  </TextInputBox> 
      </Container>
      <Container
      height={8}
   width={100}
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
  
   marginBottom={3}
      >
        <Button
           height={7}
width={80}
backgroundColor={Colors.appBlue} 
text={'Login'}
size={17} 
borderRadius={5}
onPress={()=> props.navigation.navigate('Page')}
 
        />
      </Container>
      <Container
      height={4}
      width={100}
      
      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
    
      >
     <H1 color={Colors.appBlack}  size={14}>New to sportgenie? <H1 color={Colors.appBlue} textAlign={'center'} size={14}>
     Sign up
        </H1>  </H1>   
      </Container>
      </Container>

  
  );
};

export default Login;
