import { Link } from '@reach/router';

import './heading.css';

export default function Heading() {
  return (
    <header className='header'>
      <h1>Trevor Davis</h1>
      <nav>
        <Link to='/'>Home</Link> | <Link to='experience'>Experience</Link>
      </nav>
    </header>
  );
}
