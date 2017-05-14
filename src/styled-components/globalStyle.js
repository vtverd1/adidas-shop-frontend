import {injectGlobal} from 'styled-components';

export default injectGlobal`

  html, body {
    height: 100%;
  }


  .is-nowrap {
    flex-wrap: nowrap;
  }


  aside, section {
    button, a, input { outline-style: none; }
    a { text-decoration: none; }
  }
  section {
    flex-basis: 100%;
  }

  aside {
    min-height: 100vh;
    background-color: #0e0e0e;
    flex-basis: 414px;
  }
`;
