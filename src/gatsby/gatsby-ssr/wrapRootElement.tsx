import { MDXProvider } from '@mdx-js/react';
import { GatsbySSR, WrapRootElementNodeArgs } from 'gatsby';
import React from 'react';

import * as components from '../../components/Mdx';
import { StoreProvider } from '../../store';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = (
  props: WrapRootElementNodeArgs
): any => ( // eslint-disable-line @typescript-eslint/no-explicit-any
  <MDXProvider
    components={components}
  >
    <StoreProvider>
      {props.element}
    </StoreProvider>
  </MDXProvider>
);
