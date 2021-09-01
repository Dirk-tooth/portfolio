import TypeIt from 'typeit-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faBluetoothB,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faMarkdown,
  faNodeJs,
  faSketch,
} from '@fortawesome/free-brands-svg-icons';

import './landing.css';

const tech = [
  faReact,
  faBluetoothB,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faMarkdown,
  faNodeJs,
  faSketch,
  //
  faReact,
  faBluetoothB,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faMarkdown,
  faNodeJs,
  faSketch,
];

export default function Landing() {
  return (
    <div>
      <div className='techBanner'>
        {tech.map((icon) => (
          <FontAwesomeIcon icon={icon} size='3x' style={{ margin: '3rem' }} />
        ))}
      </div>
      <div className='container'>
        <h1>Landing</h1>
        <TypeIt>Landing Typeing Effect Example. </TypeIt>
        <div className='content'>
          <p>
            Irure commodo nulla consequat officia amet. Aute nulla amet eiusmod
            deserunt. Sint excepteur sint id do esse commodo incididunt culpa ea
            sunt veniam non enim. Amet do ex occaecat eiusmod amet. Et tempor
            enim occaecat ad voluptate proident deserunt id ullamco labore non
            minim cupidatat anim. Sunt aliqua elit aliquip reprehenderit quis
            deserunt est laboris eiusmod est eu enim consectetur in.
          </p>
          <p>
            Eiusmod et qui in eiusmod qui officia id nulla quis ex consectetur
            velit. Elit in nulla tempor aliqua consequat incididunt do sunt
            tempor consequat irure fugiat. Dolore sit eiusmod dolor amet labore
            adipisicing proident tempor irure. Aliqua nisi ex duis fugiat
            exercitation laboris esse consectetur adipisicing cupidatat
            incididunt aute magna eiusmod. Esse minim ad consectetur magna elit
            mollit deserunt excepteur eiusmod commodo.
          </p>
          <p>
            Do cupidatat et fugiat anim cupidatat eu cupidatat consequat.
            Cupidatat commodo dolore velit eiusmod nulla laborum consequat minim
            mollit fugiat officia. Reprehenderit exercitation nostrud sint do
            laborum proident. Tempor velit cupidatat et adipisicing sint anim ad
            dolor eiusmod elit labore mollit. Consectetur ullamco cupidatat ex
            aliqua deserunt voluptate.
          </p>
        </div>
      </div>
    </div>
  );
}
