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

export const Viptips = props => {
  let data = [{
    value: 'car',
  }, {
    value: 'go',
  }, {
    value: 'ear',
  }];
  const [active , setActive]=useState("Boxone")
  return (
    <Container flex={1} backgroundColor={Colors.appwhite}>
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
     Premium
    </H1>     
    </Container>  
    </Container>
    <ScrollView>
        {/* box1 */}
        <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2.4}
    >
    <ImageWrap
            source={AppIcons.ad}
            height={4}
            width={8}
            fit={'contain'}
          />      

    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingLeft={0.7}
    marginLeft={2}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Get rid pf ads and enjoy a smooth an uninterrupted app experirence
    </H1>      
    </Container>  

    </Container>  

    {/* box2 */}

    <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}

    >
   <ImageWrap
            source={AppIcons.appepic}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={-1}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Enjoy Sure games from Sport genie bookmakers
    </H1>      
    </Container>  
    </Container>  
{/* box3 */}

    <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2.4}
    >
 <ImageWrap
            source={AppIcons.ad}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Get rid pf ads and enjoy a smooth an uninterrupted app experirence
    </H1>      
    </Container>  

    </Container>  

 {/* box4 */}

 <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    >
   <ImageWrap
            source={AppIcons.appepic}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Enjoy Sure games from Sport genie bookmakers
    </H1>      
    </Container>  
    </Container> 
     {/* box5 */}
     <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2.4}
    >
 <ImageWrap
            source={AppIcons.ad}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Get rid pf ads and enjoy a smooth an uninterrupted app experirence
    </H1>      
    </Container>  

    </Container>  

    {/* box6 */}
    <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    >
   <ImageWrap
            source={AppIcons.appepic}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Enjoy Sure games from Sport genie bookmakers
    </H1>      
    </Container>  
    </Container> 
  {/* box7 */}
  <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginBottom={2}
    >
     <Container
    height={5}
    width={9}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2.4}
    >
  <ImageWrap
            source={AppIcons.ad}
            height={4}
            width={8}
            fit={'contain'}
          />      
    </Container> 

     <Container
    height={6}
    width={80}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={2}
    >
     <H1 color={Colors.appBlackish} size={12}>
     Get rid pf ads and enjoy a smooth an uninterrupted app experirence
    </H1>      
    </Container>  
    </Container>

    {/* twobox */}
    
    <Container
    height={4}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={45}
    paddingTop={0.9}
     >
     <H1 color={Colors.appText} size={14}>
     Save up to 45%
    </H1>    
     </Container> 

     <Container
    height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'}
     direction={'row'}
      >
      <Container
    height={18}
    width={45}
    backgroundColor={Colors.appPlaceholder}
   
    horizontalAlignment={'center'}
    borderWidth={1}
    borderColor={Colors.appUniqueblue}
    borderRadius={5}
    // onPress={()=> setActive('Boxone')}
      >
     <Container
    height={5}
    width={44}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-end'}
    borderRadius={5}
    marginLeft={0.4}
    >
   <Container
    height={5}
    width={10}
    backgroundColor={active=='Boxone'?Colors.appBlue:Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={5}
    borderBottomLeftRadius={20}
    >
    
    <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 

    </Container>    
    </Container> 
    <Container
    height={10}
    width={43}
    backgroundColor={Colors.appWhite}
 
    horizontalAlignment={'center'}
    marginTop={1}
    >
    <Container
    height={4.5}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
      <H1 color={Colors.appText} size={17}>
      ₦600
    </H1>    
    </Container>
     <Container
    height={3}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
      <P color={Colors.appText} size={15}>
      Per month
    </P>    
    </Container>
    </Container>     
      </Container> 
      <Container
    height={18}
    width={45}
    backgroundColor={Colors.appPlaceholder}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderWidth={1}
    borderColor={Colors.appUniqueblue}
    borderRadius={5}
    onPress={()=> setActive('Boxtwo')}
      >
 <Container
    height={5}
    width={44}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-end'}
    borderRadius={5}
    marginLeft={0.4}
    marginTop={-1.6}
    >
   <Container
    height={5}
    width={10}
    backgroundColor={active=='Boxtwo'?Colors.appBlue:Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={5}
    borderBottomLeftRadius={20}
    >
   
      <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
    </Container>    
    </Container> 
    <Container
    height={10}
    width={43}
    backgroundColor={Colors.appWhite}
 
    horizontalAlignment={'center'}
    marginTop={1}
    >
    <Container
    height={4.5}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
      <H1 color={Colors.appText} size={17}>
      ₦4,500
    </H1>    
    </Container>
     <Container
    height={3}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
      <P color={Colors.appText} size={15}>
      Per month
    </P>    
    </Container>
    </Container>     


      </Container>   
      </Container>
      <Container marginLeft={3}>
      <Button
    height={7}
    width={95}
    backgroundColor={Colors.appUniqueblue}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    text={'Get started'}
    borderRadius={8}
      /> 
      </Container>
      <Container
    height={7}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <P color={Colors.appText} size={15}>
    Cancel anytime. Automatically renews
    </P>       
    </Container>
    </ScrollView>
    </Container>

  
  );
};

export default Viptips;
