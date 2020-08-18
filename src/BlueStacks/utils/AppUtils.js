import Bitmap from '../../BlueStacks/public/svgfonts/Bitmap.png';
import Bitmap2 from '../../BlueStacks/public/svgfonts/Bitmap2.png';
import Bitmap3 from '../../BlueStacks/public/svgfonts/Bitmap3.png';
import Bitmap4 from '../../BlueStacks/public/svgfonts/Bitmap4.png';
import Bitmap5 from '../../BlueStacks/public/svgfonts/Bitmap5.png';
import Bitmap6 from '../../BlueStacks/public/svgfonts/Bitmap6.png';
import Bitmap7 from '../../BlueStacks/public/svgfonts/Bitmap7.png';
import Bitmap8 from '../../BlueStacks/public/svgfonts/Bitmap8.png';



// get image according to key name
export function getImage(name) {
  switch (name && name.toLowerCase()) {
    case 'bitmap':
      return Bitmap;
    case 'bitmap2':
      return Bitmap2;
    case 'bitmap3':
      return Bitmap3;
    case 'bitmap4':
      return Bitmap4;
    case 'bitmap5':
      return Bitmap5;
    case 'bitmap6':
      return Bitmap6;
    case 'bitmap7':
      return Bitmap7;
    case 'bitmap8':
      return Bitmap8;
    default:
      return '';
  }
}
