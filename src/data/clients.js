// Logos shown in the scrolling "Selected collaborations" strip on the home page.
// Only add logos you are permitted to display.
//
// To use a logo:
//   1. Save it in src/assets/clients/  (SVG or PNG with a transparent background, ideally wide-ish, e.g. buyhi.svg)
//   2. Import it here with the `url:` prefix:
//        import buyhiLogo from 'url:../assets/clients/buyhi.svg';
//   3. Set  logo: buyhiLogo  on that client.
// With  logo: null  the client's name is shown as text instead.

import buyhiImg from 'url:../assets/clients/humanImprovement.png';
import mhw from 'url:../assets/clients/mhw.png';
import pureInstinct from 'url:../assets/clients/pureInstinct.webp';
import trulyClear from 'url:../assets/clients/trulyClear.webp';
import digiCom from 'url:../assets/clients/digiCom.png';
import entreprenista from 'url:../assets/clients/entreprenista.png';
import ssr from 'url:../assets/clients/ssr.png';


export const clients = [
  { name: 'BuyHi', logo: buyhiImg },
  { name: 'MHW Ltd', logo: mhw },
  { name: 'Pure Instinct', logo: pureInstinct },
  { name: 'Truly Clear', logo: trulyClear },
  { name: 'Digicom', logo: digiCom },
  { name: 'Entreprenista', logo: entreprenista },
  { name: 'SSR', logo: ssr },
];
