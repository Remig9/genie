/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: '#FFFFFF',
  appUniqueblue:'rgba(8, 114, 186, 1)',
  appBackground:'#E5E5E5',
  appPlaceholder:'rgba(255, 255, 255, 1)',
  appInnerborder:'rgba(199, 199, 199, 1)',
  appBlue:'rgba(8, 114, 186, 1)',
  appBlack:' #000000',
  appBlackish:'rgba(0, 0, 0, 1)',
  appGreen: '#0B6D56',
  appUniquegreen:'rgba(17, 131, 65, 1)',
  appYellow: '#E0B10A',
  appOrange: '#E87409',
  appText:'rgba(4, 48, 78, 1)',
  appTexttwo:'rgba(55, 55, 55, 1)',
  appRed:'rgba(234, 16, 16, 1)',
  appUniquered:'rgba(238, 44, 52, 1)',
  appTextbox:'rgba(246, 246, 249, 1)',
  appInnerborderTwo:'rgba(196, 196, 196, 1)',
  appLine:'rgba(213, 229, 239, 1)',
  appLinetwo:'rgba(196, 196, 196, 0.4)',
  appAsh:'rgba(132, 118, 132, 1)',
 appGrey:'#373737',
 appHeadline:'rgba(196, 196, 196, 0.34)',
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const {width, height} = Dimensions.get('window');

export const RH = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = val => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = val => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};
