// import Tilty from 'react-tilty'; // dosent work?? covers the rest of the site with tilting

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import './slide.css';

export default function Slide() {
  return (
    // <Tilty
    //   // glare
    //   scale={1.05}
    //   // maxGlare={1}
    //   style={{
    //     transformStyle: 'preserve-3d',
    //     transform: 'perspective(1000px)',
    //     margin: '4rem',
    //     width: 'auto',
    //   }}
    // >
    //   <div>
    <FontAwesomeIcon icon={faReact} size='5x' />
    //   </div>
    // </Tilty>
  );
}
