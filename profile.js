import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from './helper/images';

import {ScrollView, StatusBar} from 'react-native';
import {Colors} from './helper/constants';
import {Container, ImageWrap, TouchWrap} from './helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from './helper/element';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import { Dropdown } from 'react-native-material-dropdown';

export const Profile = props => {
 
 
  const [passwordModal, setPasswordmodal] =useState (false);
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}   >
    <Container
    height={9}
    width={100}
    backgroundColor={Colors.appUniqueblue}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginTop={4}
    >
     <Container
    height={7}
    width={50}
    backgroundColor={Colors.appUniqueblue}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appWhite} textAlign={'center'} size={18}>
     Profile
    </H1>     
    </Container>  
    </Container>
    <ScrollView>
     {/* box1 */}
     <Container
    height={5}
    width={90}
    marginTop={2}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={47}
   
    > 
     <H1 color={Colors.appText} textAlign={'center'} size={18}>
     Basic information
    </H1>     
    </Container>  
 {/* line */}
 <Container
    height={0.3}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appHeadline}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={5}
   ></Container>  
    {/* info */}
    <Container
    height={30}
    width={90}
    marginTop={1}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={5}
   >
    <Container
    height={19}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
   >
    <Container
    height={17}
    width={28.5}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={200}
    >
     <ImageWrap
            source={AppIcons.appfinegirl}
            height={28}
            width={28}
            fit={'contain'}
           />  
    </Container>
    <Container
    height={13}
    width={55}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    >
   <Container
    height={4}
    width={54}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    >
    <H1 color={Colors.appText}  size={17}>
    Mary Jones
    </H1>        
    </Container>
     <Container
    height={4}
    width={54}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    >
    <P color={Colors.appText}  size={15}>
    Mary2020Jones@gmail.com
    </P>      
    </Container>  
     <Container
    height={4}
    width={54}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    >
     <H2 color={Colors.appText}  size={15}>
     User ID :<P color={Colors.appText}  size={15}> 2345668</P>
    </H2>        
    </Container>      
    </Container>  
   </Container>  
 <Container
    height={10}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
   >
  <Button
    height={7}
    width={25}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    text={'Delete'} 
    color={Colors.appText}
    size={18} 
    borderRadius={8}
  />
  <Button
    height={7}
    width={50}
    backgroundColor={Colors.appUniqueblue}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    text={'Upload new picture'}
    size={18} 
    borderRadius={8} 
    color={Colors.appWhite}
  />
   </Container>  

   </Container>  
  {/* line2 */}
  <Container
    height={0.3}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appHeadline}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
 
   ></Container>  
  <Container
    height={26}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appWhite}
 
    horizontalAlignment={'center'}
    
  >
  <Container
    height={12}
    width={90}
   backgroundColor={Colors.appWhite}
   marginBottom={2.2}
    horizontalAlignment={'center'}
  >
    <Container
    height={4}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
    paddingLeft={3}
  >
  <H1 color={Colors.appTexttwo}  size={20}>
  First name
    </H1>          
  </Container> 
  <Container
    height={8}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  >
  <TextInputBox 
  placeholder={'Mary'}
  color={Colors.appTextbox} 
  size={12} 
  height={7} 
  fontWeight={'bold'}
  borderWidth={1.5}
  borderColor={Colors.appInnerborderTwo}
       />
  </Container> 
  </Container>
  <Container
    height={12}
    width={90}
   backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
  >
    <Container
    height={4}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
    paddingLeft={3}
  >
  <H1 color={Colors.appTexttwo}  size={20}>
  Last name
    </H1>          
  </Container> 
  <Container
    height={8}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  >
  <TextInputBox 
  placeholder={'jones'}
  color={Colors.appTextbox} 
  size={12} 
  height={7} 
  fontWeight={'bold'}
  borderWidth={1.5}
  borderColor={Colors.appInnerborderTwo}
       />
  </Container> 
  </Container>
 </Container>
  {/* address */}
  <Container
    height={6.5}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={10}
    marginTop={3}
    
    borderTopWidth={0.7}
    paddingRight={28}
    

  >
  <H2 color={Colors.appTexttwo}  size={20}>
   Change your email address
    </H2> 
  </Container>
  <Container
    height={0.3}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appInnerborderTwo}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
   ></Container> 
   <TouchWrap  onPress={()=> setPasswordmodal(true) }>
  <Container
    height={6.5}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    
    marginRight={10}
    paddingLeft={6}
  >
  <H2 color={Colors.appTexttwo}  size={20}>
  Change password
    </H2> 
    <Modal isVisible={passwordModal} >
       <Container  height={56}
       marginTop={40}
       backgroundColor={Colors.appWhite}
      marginLeft={-5}
    width={100}>
     <TouchWrap  onPress={()=> setPasswordmodal(false)}> 
         <Container
         height={7}
    width={100}
    paddingLeft={2}
    verticalAlignment={'center'}
    backgroundColor={Colors.appWhite}

         >
           <MaterialIcons
                  name="cancel"
                  color={ Colors.appBlack
                  }
                  size={30}
                  
                />  
         </Container>
         </TouchWrap>
       <Container
     height={5}
    width={100}
   backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    
     marginTop={8} 
     paddingLeft={3}   
         >
           <H1 color={Colors.appTexttwo}  size={17}>
Confirm your identity
    </H1> 
         </Container>
         <Container
     height={8}
    width={100}
   backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    
   
     paddingLeft={3}   
         >
           <P color={Colors.appTexttwo}  size={15}>
For security reasons,we'll send a verification code to <H1  color={Colors.appTexttwo} size={15}>mary2020Jones@gmail.com</H1> 
    </P> 
         </Container>
         <Container
     height={8}
    width={100}
   backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
     paddingLeft={3}   
         >
           <P color={Colors.appTexttwo}  size={15}>
if you don't have accesss to this email address,please contact sportgenie support
     </P> 
         </Container>
         <Container
      height={8}
   width={100}
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   backgroundColor={Colors.appWhite}
   marginTop={2}
   marginBottom={3}
      >
        <Button
           height={7}
width={80}
backgroundColor={Colors.appBlue} 
text={'Send Code'}
size={17} 
borderRadius={5}

 
        />
      </Container>
       </Container>
     </Modal>
  </Container>
  </TouchWrap> 
  <Container
    height={0.3}
    width={100}
   
    backgroundColor={Colors.appInnerborderTwo}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    ></Container>  
<Container
    height={19}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
   <Container
    height={6}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    paddingLeft={6}
    >
      <H1 color={Colors.appTexttwo}  size={25}>
      MY SUBSCRIPTION PLAN
    </H1>
    </Container> 
    <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    paddingLeft={6}
    >
    <P color={Colors.appTexttwo}  size={18}>
    Subscription
    </P>  
    </Container>  
    <Container
    height={5}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'flex-start'}
    paddingLeft={6}
    >
      <H2 color={Colors.appUniqueblue}  size={13}>
      Monthly Plan
    </H2>
    </Container>      
    </Container>
    <Container
    height={0.3}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appInnerborderTwo}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
     ></Container>
      
      <Container
    height={6.5}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    
    marginRight={10}
    paddingLeft={6}
  >
  <H1 color={Colors.appTexttwo}  size={20}>
  Manage my subcription
    </H1> 
  </Container>
 
  <Container
    height={0.3}
    width={100}
    marginTop={1}
    backgroundColor={Colors.appInnerborderTwo}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
     ></Container>    
 </ScrollView>
     {/* m0dal */}
     
   
    </Container>

  
  );
};

export default  Profile;
