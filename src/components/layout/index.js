import React from 'react';
import type {Children} from 'react';
import {Row} from 'react-flexbox-grid';
import Sidebar from '../sidebar';

type Props = {
  children: Children
};

const Layout = ({children}: Props) => {
  return (
    <Row className="is-nowrap">
      <aside><Sidebar /></aside>
      <section>{children}</section>
    </Row>
  );
};

export default Layout;
