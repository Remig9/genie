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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import { Dropdown } from 'react-native-material-dropdown';

export const Freetips = props => {
  let data = [{
    value: 'car',
  }, {
    value: 'go',
  }, {
    value: 'ear',
  }];
 
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
     Free tips of the day
    </H1>     
    </Container>  
    </Container>
    <ScrollView>
      {/* matchbox */}
      <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appengland}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appUniquegreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    PORTSMOUTH FC 
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={13}>
    FT Score: 0-2
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>

     

 {/* matchbox2 */}
      
 <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appengland}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <FontAwesome5
                  name="times"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    PORTSMOUTH FC 
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={13}>
    FT Score: 0-2
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>





     

     

 {/* matchbox2 */}
      
 <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.austria}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}

   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     AUSTRIA BUDESLIGA
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appAsh}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <Octicons
                  name="dash"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       SK STRUM GRAZ
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={19}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    SCR ALTACH
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appUniquered} textAlign={'center'} size={13}>
    Minute: 43’ Score: 1-1
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>
 {/* box */}

 <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appengland}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appUniquegreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={8}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    MILLWALL FC
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={13}>
    FT Score: 0-2
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>

  {/* box4 */}
  

  <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appengland}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appUniquegreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={8}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    MILLWALL FC
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={13}>
    FT Score: 0-2
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>

     {/* lastbox */}



     <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}

    horizontalAlignment={'center'}
   >
   <Container
    height={7}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
   >
 <Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={2}
   >
<Container
    height={5}
    width={10}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-5}
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appengland}
            height={4}
            width={40}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={5}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3}
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
    <Container
    height={6}
    width={30}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={13}
   >
   <TouchWrap>
     <Container
    height={5}
    width={8.4}
    backgroundColor={Colors.appUniquegreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={8}
    
   >
      <Ionicons
                  name="checkmark-outline"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   </Container>
   </TouchWrap>
   </Container>
      </Container>
      <Container
       height={12}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    paddingRight={0.5}
    marginLeft={-2}
       >
    <Container
    height={11}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
     <Container
     height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={8}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
     height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       ( 1 )
    </H1> 
    </Container>   
    </Container>
    <Container
    height={5.5}
    width={60}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    paddingRight={1}
    >
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={15}
    marginRight={5}
    >
    <H1 color={Colors.appText} textAlign={'center'} size={14}>
    MILLWALL FC
    </H1>   
    </Container> 
    <Container
    height={4}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     ( 2 ) 
    </H1>    
    </Container> 
    </Container>  
    </Container>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appWhite}
  
    horizontalAlignment={'center'}
    marginLeft={18}
    paddingLeft={3}
    >
      <H1 color={Colors.appText} textAlign={'center'} size={25}>
     3
    </H1> 
    </Container>
      </Container>
      <Container
    height={4}
    width={50}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={5}
    >
    <H1 color={Colors.appUniquered} textAlign={'center'} size={13}>
    Starting: 16:00
    </H1> 
    </Container>
      </Container>
     
      <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>


</ScrollView>
    </Container>

  
  );
};

export default Freetips;
