import React, { ReactElement, ReactNode } from 'react';

import './Content.scss';

interface ContentProps {
  children: ReactNode;
}

const Content = (props: ContentProps): ReactElement => (
  <main className="content">
    {props.children}
  </main>
);

export default Content;
