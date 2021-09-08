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

export const News = props => {
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
   News
    </H1>     
    </Container>  
    </Container>
    <ScrollView>
      {/* number one */}
      <Container
    height={6}
    width={100}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <Container
    paddingVertical={1}
    width={95}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText} textAlign={'center'} size={15}>
     Premier League team guide: Arsenal in the spotlight
    </H1>     
    </Container> 
 </Container>

{/* image */}
<Container
    height={23}
    width={100}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.aubuyang}
            height={23}
            width={95}
            fit={'contain'}
          />      
   </Container>

     {/* words */}
    
   <Container
    height={9}
    width={95}
    direction={'row'}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginTop={2}
    marginLeft={3}
   >
   <Container
   paddingVertical={1}
    width={95}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   >
      <P color={Colors.appText} size={12}>
      This season will be Arsenal’s first without European football since 1995-96 — and major improvement
       will be needed if they are to break back into the 
    </P> 
    <Container marginTop={-2.2}><TouchWrap><P textAlign={'center'}  color={Colors.appUniqueblue}>Read More</P></TouchWrap></Container>   
   </Container>
   </Container>
<Container
    height={3}
    width={95}
 
    verticalAlignment={'center'}
     
    marginLeft={3}
>
  <P color={Colors.appText}>1 hours ago</P>
</Container>

{/* line */}
<Container
      height={0.6}
      width={95}
      marginLeft={3}
      marginTop={3}
      backgroundColor={Colors.appHeadline}
      >
      </Container>

<Container
    height={7}
    width={100}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <Container
    height={6}
    width={95}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText}  size={15}>
     Messi leaves Barcelona: The best quotes from Leo's parting news conference
    </H1>     
    </Container> 
 </Container>
 <Container
    height={23}
    width={100}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appmessi}
            height={23}
            width={95}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={9}
    width={95}
    direction={'row'}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginTop={2}
    marginLeft={3}
   >
   <Container
   paddingVertical={1}
    width={95}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   >
      <P color={Colors.appText} size={12}>
      This season will be Arsenal’s first without European football since 1995-96 — and major improvement
       will be needed if they are to break back into the 
    </P> 
    <Container marginTop={-2.2}><TouchWrap><P  textAlign={'center'} color={Colors.appUniqueblue}>Read More</P></TouchWrap></Container>   
   </Container>
   </Container>
   <Container
    height={3}
    width={95}
    
    verticalAlignment={'center'}
     
    marginLeft={3}
>
  <P color={Colors.appText}>1 hours ago</P>
</Container>
<Container
      height={0.6}
      width={95}
      marginLeft={3}
      marginTop={3}
      backgroundColor={Colors.appHeadline}
      >
      </Container>
   <Container
    height={7}
    width={100}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-2.8}
    >
     <Container
    height={6}
    width={95}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText}  size={15}>
     Allegri must squeeze the Maximum out of the Old Lady
    </H1>     
    </Container> 
 </Container>
 <Container
    height={23}
    width={100}
 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appcoach}
            height={23}
            width={95}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={9}
    width={95}
    direction={'row'}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginTop={2}
    marginLeft={3}
   >
   <Container
   paddingVertical={1}
    width={95}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   >
      <P color={Colors.appText} size={12}>
     Juventus have fallen a long way since Massimiliano Allegri was last in the dugout — and taking the Old Lady back to the top will be his biggest challenge yet.
    </P> 
    <Container marginTop={-2.1} marginLeft={36}><TouchWrap><P  textAlign={'center'} color={Colors.appUniqueblue}>Read More</P></TouchWrap></Container>   
   </Container>
   </Container>
   <Container
    height={3}
    width={95}
    
    verticalAlignment={'center'}
     
    marginLeft={4}
>
  <P color={Colors.appText}>18 hours ago</P>
</Container>
<Container
      height={0.6}
      width={95}
      marginLeft={3}
      marginTop={3}
      backgroundColor={Colors.appHeadline}
      >
      </Container>
 <Container
    height={7}
    width={100}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-2.8}
    >
     <Container
    height={6}
    width={95}
    marginLeft={5}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    > 
     <H1 color={Colors.appText}  size={15}>
     Premier League team guide: Chelsea in the spotlight
    </H1>     
    </Container> 
 </Container>
 <Container
    height={23}
    width={100}
 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    borderRadius={5}
   >
    <ImageWrap
            source={AppIcons.appchelsea}
            height={23}
            width={95}
            fit={'contain'}
          />      
   </Container>
   <Container
    height={9}
    width={95}
    direction={'row'}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginTop={2}
    marginLeft={3}
   >
   <Container
   paddingVertical={2}
    width={95}
 
    verticalAlignment={'center'}
    
   >
      <P color={Colors.appText} size={12}>
      Champions League glory brought the curtain down on a turbulent but successful 2020-21 campaign for Chelsea.
    </P> 
    <Container ><TouchWrap><P  textAlign={'center'} color={Colors.appUniqueblue}>Read More</P></TouchWrap></Container>   
   </Container>
   </Container>



   <Container
    height={3}
    width={95}
 
    verticalAlignment={'center'}
     
    marginLeft={4}
>
  <P color={Colors.appText}>1 hours ago</P>
</Container>
<Container
      height={0.6}
      width={95}
      marginLeft={3}
      marginTop={3}
      backgroundColor={Colors.appHeadline}
      >
      </Container>
</ScrollView>
    </Container>

  
  );
};

export default  News;
