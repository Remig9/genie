import React, {useState, useEffect} from 'react';


import {Container, ImageWrap,TouchWrap} from '../helper/index';

import {Colors} from '../helper/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../helper/fontSize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {H2} from '../helper/element';
import Freetips from '../Freetips';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fixtures from '../fixtures';
import News from '../news';
import Viptips from '../viptips';
import Profile from '../profile';






export const Page = props => {

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('Freetips');
  

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container heightPercent={'89%'} width={100} >
   

        {active == 'Freetips' ? <Freetips /> : null}
       {active == 'Fixtures' ? <Fixtures /> : null}
        {active == 'News' ? <News /> : null}
        {active == 'Viptips' ? <Viptips /> : null}
        {active == 'Profile' ? <Profile /> : null} 

      </Container>

      <Container
        heightPercent={'11%'}
        verticalAlignment={'flex-end'}
        width={100}
        paddingHorizontal={5}
        backgroundColor={Colors.appBottomtabColor}>
        <Container
          flex={1}
          marginBottom={1}
          backgroundColor={Colors.appShadow}
          verticalAlignment={'center'}
          width={90}
          direction={'row'}
          horizontalAlignment={'space-evenly'}
          borderRadius={20}>
          <TouchWrap onPress={() => setActive('Freetips')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <Foundation
                  name="lightbulb"
                  size={Fonts.semiBig}
                  color={
                    active == 'Freetips' ? Colors.appUniqueblue : Colors.appGrey
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Freetips' ? Colors.appUniqueblue : Colors.appGrey
                  }>
              Free tips
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Fixtures')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <FontAwesome5 
                  name="bolt"
                  size={Fonts.semiBig}
                  color={
                    active == 'Fixtures' ? Colors.appUniqueblue:Colors.appGrey
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Fixtures' ? Colors.appUniqueblue : Colors.appGrey
                  }>
            Fixtures
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('News')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <AntDesign
                  name="shoppingcart"
                  size={Fonts.semiBig}
                  color={
                    active == 'News' ? Colors.appUniqueblue : Colors.appGrey
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'News' ? Colors.appUniqueblue : Colors.appGrey
                  }>
               News
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Viptips')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <Ionicons
                  name="md-basket-outline"
                  size={Fonts.semiBig}
                  color={
                    active == 'Viptips' ? Colors.appUniqueblue : Colors.appGrey
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Viptips' ? Colors.appUniqueblue : Colors.appGrey
                  }>
               Viptips
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Profile')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <SimpleLineIcons
                  name="earphones-alt"
                  size={Fonts.semiBig}
                  color={
                    active == 'Profile' ? Colors.appUniqueblue : Colors.appGrey
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Profile' ? Colors.appUniqueblue : Colors.appGrey
                  }>
                Profile
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          
        </Container>
      </Container>
    </Container>
  );
};

export default Page;
