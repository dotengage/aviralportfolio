import blinkit from '../assets/brands/blinkit.png';
import kraftshala from '../assets/brands/kraftshala.png';
import litschool from '../assets/brands/litschool.png';
import mypb from '../assets/brands/mypb.svg';
import damensch from '../assets/brands/damensch.svg';
import clotrio from '../assets/brands/clotrio.png';
import infare from '../assets/brands/infare.png';
import nifglobal from '../assets/brands/nifglobal.png';

/**
 * Brands in the logo strip. `h` is the display height in px — wide wordmarks
 * sit shorter than stacked marks so they all feel the same visual size.
 */
export interface Brand {
  name: string;
  logo: ImageMetadata;
  h: number;
}

export const brands: Brand[] = [
  { name: 'Blinkit', logo: blinkit, h: 30 },
  { name: 'Kraftshala', logo: kraftshala, h: 46 },
  { name: 'LIT School', logo: litschool, h: 48 },
  { name: 'MYPB', logo: mypb, h: 42 },
  { name: 'DaMENSCH', logo: damensch, h: 22 },
  { name: 'Clotrio', logo: clotrio, h: 34 },
  { name: 'Infare', logo: infare, h: 38 },
  { name: 'NIF Global', logo: nifglobal, h: 46 },
];
