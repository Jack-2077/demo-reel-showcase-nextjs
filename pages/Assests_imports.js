import pic1 from '../public/assests/PROJECTS/01.GASSTATION/06.jpg';

import pic2 from '../public/assests/PROJECTS/02.ATELIER/ATLR01.jpg';

import pic3 from '../public/assests/PROJECTS/03.917/917_01.jpg';
import pic4 from '../public/assests/PROJECTS/03.917/917_02.jpg';
import pic5 from '../public/assests/PROJECTS/03.917/917_03.jpg';
import pic6 from '../public/assests/PROJECTS/03.917/917_04.jpg';
import pic7 from '../public/assests/PROJECTS/03.917/917_05.jpg';
import pic8 from '../public/assests/PROJECTS/03.917/917_06.jpg';
import pic9 from '../public/assests/PROJECTS/03.917/917_07.jpg';

import pic10 from '../public/assests/PROJECTS/04.VELAR/VLR_01.jpg';

import pic11 from '../public/assests/PROJECTS/05.ROVER/SPACEROVER_03.jpg';
import pic12 from '../public/assests/PROJECTS/05.ROVER/SPACEROVER_004.jpg';
import pic13 from '../public/assests/PROJECTS/05.ROVER/SPACEROVER_005.jpg';

import pic14 from '../public/assests/PROJECTS/06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_Colour.jpg';
import pic15 from '../public/assests/PROJECTS/06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_DAY.jpg';

import pic16 from '../public/assests/PROJECTS/07.PORSCHE_SINGER/04.jpg';

import pic17 from '../public/assests/PROJECTS/08.ECDYSIS721/fs_frontquarter.jpg';
import pic18 from '../public/assests/PROJECTS/08.ECDYSIS721/FS_SIDE.jpg';
import pic19 from '../public/assests/PROJECTS/08.ECDYSIS721/FS02.jpg';
import pic20 from '../public/assests/PROJECTS/08.ECDYSIS721/FS03.jpg';
import pic21 from '../public/assests/PROJECTS/08.ECDYSIS721/GREYSPIKE.jpg';
import pic22 from '../public/assests/PROJECTS/08.ECDYSIS721/ORANGE.jpg';
import pic23 from '../public/assests/PROJECTS/08.ECDYSIS721/SCENE_04_001.jpg';

import pic24 from '../public/assests/PROJECTS/09.RESTLESS/Vfx02AkshayVenugopal_VFXPreProdFinalModel_Class08.v001-01.jpg';

import pic25 from '../public/assests/PROJECTS/10.TOWNCAR/CAM_02.jpg';
import pic26 from '../public/assests/PROJECTS/10.TOWNCAR/CAM_04_02.jpg';
import pic27 from '../public/assests/PROJECTS/10.TOWNCAR/CAM_05_03.jpg';

import pic28 from '../public/assests/PROJECTS/11.CRITTER/01_001.jpg';

import grey1 from '../public/assests/PROJECTS/01.GASSTATION/grey.jpg';

import grey2 from '../public/assests/PROJECTS/02.ATELIER/ATLR02.jpg';

import grey3 from '../public/assests/PROJECTS/04.VELAR/VLR_02.jpg';

import grey4 from '../public/assests/PROJECTS/07.PORSCHE_SINGER/04b&w.jpg';

import grey5 from '../public/assests/PROJECTS/11.CRITTER/02_085.jpg';

//import video1 from '../public/assests/PROJECTS/01.GASSTATION/GS01.mp4';
// import video2 from '../public/assests/PROJECTS/02.ATELIER/ATLR01.mp4';
// import video3 from '../public/assests/PROJECTS/03.917/01.mp4';
// import video4 from '../public/assests/PROJECTS/04.VELAR/VLR01.mp4';
// import video5 from '../public/assests/PROJECTS/05.ROVER/ROVER01.mp4';
// import video6 from '../public/assests/PROJECTS/06.HALLOWEEN/HALOWEEN01.mp4';
// import video7 from '../public/assests/PROJECTS/07.PORSCHE_SINGER/04.gif';
// import video8 from '../public/assests/PROJECTS/09.RESTLESS/FINAL_EDIT_AUG18_v003_FINAL.mp4';
// import video9 from '../public/assests/PROJECTS/11.CRITTER/CRITTER01.mp4';

// const set1 = [[pic1], [grey1], [video1]];

// const set2 = [[pic2], [grey2], [video2]];

// const set3 = [[pic3, pic4, pic5, pic6, pic7, pic8, pic9], [], [video3]];

// const set4 = [[pic10], [grey3], [video4]];

// const set5 = [[pic11, pic12, pic13], [], [video5]];

// const set6 = [[pic14, pic15], [], [video6]];

// const set7 = [[pic16], [grey4], [video7]];

// const set8 = [[pic17, pic18, pic19, pic20, pic21, pic22, pic23], [], []];

// const set9 = [[pic24], [], [video8]];

// const set10 = [[pic25, pic26, pic27], [], []];

// const set11 = [[pic28], [grey5], [video9]];

// const MAIN_SET = [
//   set1,
//   set2,
//   set3,
//   set4,
//   set5,
//   set6,
//   set7,
//   set8,
//   set9,
//   set10,
//   set11,
// ];

export const REEL_IMAGES = [
  {
    image: pic1,
    title: 'GASSTATION',
    set: {
      main: [pic1],
      grey: [grey1],
      video: '/assests/PROJECTS/01.GASSTATION/GS01.mp4',
    },
  },
  {
    image: pic3,
    title: '917',
    set: {
      main: [pic3, pic4, pic5, pic6, pic7, pic8, pic9],
      video: '/assests/PROJECTS/03.917/01.mp4',
    },
  },
  {
    image: pic28,
    title: 'CRITTER',
    set: {
      main: [pic28],
      grey: [grey5],
      video: '/assests/PROJECTS/11.CRITTER/02_085.jpg',
    },
  },
  {
    image: pic2,
    title: 'ATELIER',
    set: {
      main: [pic2],
      grey: [grey2],
      video: '/assests/PROJECTS/02.ATELIER/ATLR01.mp4',
    },
  },
  {
    image: pic14,
    title: 'HALLOWEEN',
    set: {
      main: [pic14, pic15],
      video: '/assests/PROJECTS/06.HALLOWEEN/HALOWEEN01.mp4',
    },
  },
  {
    image: pic16,
    title: 'PORSCHE SINGER',
    set: {
      main: [pic16],
      grey: [grey4],
      video: '/assests/PROJECTS/07.PORSCHE_SINGER/04.gif',
    },
  },
  {
    image: pic24,
    title: 'RESTLESS',
    set: {
      main: [pic24],
      video: '/assests/PROJECTS/09.RESTLESS/FINAL_EDIT_AUG18_v003_FINAL.mp4',
    },
  },
  {
    image: pic10,
    title: 'VELAR',
    set: {
      main: [pic10],
      grey: [grey3],
      video: '/assests/PROJECTS/04.VELAR/VLR01.mp4',
    },
  },
  {
    image: pic17,
    title: 'ROVER',
    set: {
      main: [pic17, pic18, pic19, pic20, pic21, pic22, pic23],
    },
  },
  {
    image: pic11,
    title: 'SPACE ROVER',
    set: {
      main: [pic11, pic12, pic13],
      video: '/assests/PROJECTS/05.ROVER/ROVER01.mp4',
    },
  },
  {
    image: pic25,
    title: 'TOWNCAR',
    set: {
      main: [pic25, pic26, pic27],
    },
  },
];

export const REEL_IMAGES2 = {
  GASSTATION: {
    image: pic1,
    title: 'GASSTATION',
    set: {
      main: [pic1],
      grey: [grey1],
      video: '/assests/PROJECTS/01.GASSTATION/GS01.mp4',
    },
  },
  917: {
    image: pic3,
    title: '917',
    set: {
      main: [pic3, pic4, pic5, pic6, pic7, pic8, pic9],
      video: '/assests/PROJECTS/03.917/01.mp4',
    },
  },
  CRITTER: {
    image: pic28,
    title: 'CRITTER',
    set: {
      main: [pic28],
      grey: [grey5],
      video: '/assests/PROJECTS/11.CRITTER/02_085.jpg',
    },
  },
  ATELIER: {
    image: pic2,
    title: 'ATELIER',
    set: {
      main: [pic2],
      grey: [grey2],
      video: '/assests/PROJECTS/02.ATELIER/ATLR01.mp4',
    },
  },
  HALLOWEEN: {
    image: pic14,
    title: 'HALLOWEEN',
    set: {
      main: [pic14, pic15],
      video: '/assests/PROJECTS/06.HALLOWEEN/HALOWEEN01.mp4',
    },
  },
  PORSCHESINGER: {
    image: pic16,
    title: 'PORSCHE SINGER',
    set: {
      main: [pic16],
      grey: [grey4],
      video: '/assests/PROJECTS/07.PORSCHE_SINGER/04.gif',
    },
  },
  RESTLESS: {
    image: pic24,
    title: 'RESTLESS',
    set: {
      main: [pic24],
      video: '/assests/PROJECTS/09.RESTLESS/FINAL_EDIT_AUG18_v003_FINAL.mp4',
    },
  },
  VELAR: {
    image: pic10,
    title: 'VELAR',
    set: {
      main: [pic10],
      grey: [grey3],
      video: '/assests/PROJECTS/04.VELAR/VLR01.mp4',
    },
  },
  ROVER: {
    image: pic17,
    title: 'ROVER',
    set: {
      main: [pic17, pic18, pic19, pic20, pic21, pic22, pic23],
    },
  },
  SPACEROVER: {
    image: pic11,
    title: 'SPACE ROVER',
    set: {
      main: [pic11, pic12, pic13],
      video: '/assests/PROJECTS/05.ROVER/ROVER01.mp4',
    },
  },
  TOWNCAR: {
    image: pic25,
    title: 'TOWNCAR',
    set: {
      main: [pic25, pic26, pic27],
    },
  },
};
// export const HOME_SET = [
//   {
//     image: set1[0],
//     title: 'GASSTATION',
//   },
//   {
//     image: set3[0][0],
//     title: '917',
//   },
//   {
//     image: set11[0],
//     title: 'CRITTER',
//   },
//   {
//     image: set2[0],
//     title: 'ATELIER',
//   },
//   {
//     image: set6[0][0],
//     title: 'HALLOWEEN',
//   },
//   {
//     image: set7[0],
//     title: 'PORSCHE SINGER',
//   },
//   {
//     image: set9[0],
//     title: 'RESTLESS',
//   },
//   {
//     image: set4[0],
//     title: 'VELAR',
//   },
//   {
//     image: set8[0][0],
//     title: 'ROVER',
//   },
//   {
//     image: set5[0][0],
//     title: 'SPACE ROVER',
//   },
//   {
//     image: set10[0][0],
//     title: 'TOWNCAR',
//   },
// ];

// export default MAIN_SET;
