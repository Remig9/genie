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

export const Fixtures = props => {
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
     Fixtures
    </H1>     
    </Container>  
    </Container>
     {/* 2 */}
     <ScrollView>
     <Container
    height={5}
    width={100}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <Container
    height={4}
    width={50}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText} textAlign={'center'} size={18}>
     Saturday 8/7/21
    </H1>     
    </Container>  
    </Container>
       {/* 3 */}
       <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}

   >
  <Container
  verticalAlignment={'center'}

  height={8}
  width={100}
  backgroundColor={Colors.appWhite}
  >
<Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={-2}
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
  </Container>
  <Container
     height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginTop={2}
     >
     <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       FLEETWOOD TOWN
    </H1> 
    </Container> 
    <Container
    height={5.3}
    width={16}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={13}
 
    
   >
     <H1 color={Colors.appWhite} textAlign={'center'} size={20}>
      vs
    </H1> 
   </Container> 
   <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       PORTSMOUTH FC
    </H1> 
    </Container>  
     </Container>
   </Container>
     <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>



       {/* box2 */}
 <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}

   >
  <Container
  verticalAlignment={'center'}

  height={8}
  width={100}
  backgroundColor={Colors.appWhite}
  >
<Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={-2}
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
  </Container>
  <Container
     height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginTop={2}
     >
     <Container
     height={6}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       QUEENS PARK RANGERS
    </H1> 
    </Container> 
    <Container
    height={5.3}
    width={16}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={13}
 
    
   >
     <H1 color={Colors.appWhite} textAlign={'center'} size={20}>
      vs
    </H1> 
   </Container> 
   <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       MILLWALL FC
    </H1> 
    </Container>  
     </Container>
   </Container>
     <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>


       {/* box3 */}

       <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}

   >
  <Container
  verticalAlignment={'center'}

  height={8}
  width={100}
  backgroundColor={Colors.appWhite}
  >
<Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={-2}
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
    paddingRight={6}
   >
     <H1 color={Colors.appText} textAlign={'center'} size={14}>
     English Leauge One
    </H1>   
   </Container>
   </Container>
  </Container>
  <Container
     height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginTop={2}
     >
     <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       SK STRUM GRAZ
    </H1> 
    </Container> 
    <Container
    height={5.3}
    width={16}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={13}
 
    
   >
     <H1 color={Colors.appWhite} textAlign={'center'} size={20}>
      vs
    </H1> 
   </Container> 
   <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       SCR ALTACH
    </H1> 
    </Container>  
     </Container>
   </Container>
     

 {/* intermission */}


 <Container
    height={5}
    width={100}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <Container
    height={4}
    width={50}
    backgroundColor={Colors.appLine}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText} textAlign={'center'} size={18}>
     Saturday 8/8/21
    </H1>     
    </Container>  
    </Container>
 {/* second to d last */}
 <Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}

   >
  <Container
  verticalAlignment={'center'}

  height={8}
  width={100}
  backgroundColor={Colors.appWhite}
  >
<Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={-2}
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
  </Container>
  <Container
     height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginTop={2}
     >
     <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       Fulham
    </H1> 
    </Container> 
    <Container
    height={5.3}
    width={16}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={13}
 
    
   >
     <H1 color={Colors.appWhite} textAlign={'center'} size={20}>
      vs
    </H1> 
   </Container> 
   <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       Middlesbrough
    </H1> 
    </Container>  
     </Container>
   </Container>
     <Container
      height={0.5}
      width={100}
      backgroundColor={Colors.appLine}
      >
      </Container>

{/* last */}

<Container
        height={23}
    width={100}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}

   >
  <Container
  verticalAlignment={'center'}

  height={8}
  width={100}
  backgroundColor={Colors.appWhite}
  >
<Container
    height={6}
    width={70}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginLeft={-2}
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
  </Container>
  <Container
     height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginTop={2}
     >
     <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       Coventry City
    </H1> 
    </Container> 
    <Container
    height={5.3}
    width={16}
    backgroundColor={Colors.appUniquered}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={13}
 
    
   >
     <H1 color={Colors.appWhite} textAlign={'center'} size={20}>
      vs
    </H1> 
   </Container> 
   <Container
     height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appText} textAlign={'center'} size={14}>
       Nottingham Forest
    </H1> 
    </Container>  
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

export default  Fixtures;
