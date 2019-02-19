// @flow

import * as React from 'react';
import json2mq from 'json2mq';

import type { MediaTypes, Features } from './types';

type Props = Features &
    MediaTypes & {
        /**
         * Provide a css media query like string.
         */
        query?: string,

        /**
         * InitialState used for server side rendering. On SSR it will match by default.
         * You can use this to override the behaviour.
         */
        initialState: boolean,

        /**
         * Children to be rendered.
         */
        children?: React.ChildrenArray<*>,
    };

/**
 * Component that will conditionally render its children if it matches the media query.
 *
 */
const MediaQuery = ({ query, children, initialState, ...props }: Props) => {
    const mediaQueryList = window.matchMedia(query || json2mq(props));

    const [visible, setVisible] = React.useState(mediaQueryList.matches);

    const onChange = (event: MediaQueryListEvent) => {
        setVisible(event.matches);
    };

    React.useEffect(() => {
        mediaQueryList.addListener(onChange);
        onChange(mediaQueryList);

        return () => mediaQueryList.removeListener(onChange);
    }, []);

    return visible && children;
};

MediaQuery.defaultProps = {
    initialState: false,
};

export default MediaQuery;
