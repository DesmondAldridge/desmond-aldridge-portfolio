import React from 'react';
import Typed from 'typed.js';
import words from '../assets/scripts/words';
import styled from 'styled-components';

import './Typing.css';

const TypedText = styled.span`
  font-weight: 200;
  font-size: 120%;
`;

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <TypedText
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
