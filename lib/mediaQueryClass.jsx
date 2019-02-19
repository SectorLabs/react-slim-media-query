// @flow
/* eslint-disable react/sort-comp */

import * as React from 'react';
import autoBind from 'react-autobind';
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
        initialState: {
            visible?: boolean,
        },

        /**
         * Children to be rendered.
         */
        children?: React.ChildrenArray<*>,
    };

type State = {
    visible: boolean,
};

class MediaQuery extends React.Component<Props, State> {
    mediaQueryList: MediaQueryList;

    constructor(props: Props) {
        super(props);
        autoBind(this);

        const { query, initialState, children, ...mediaQuery } = props;
        this.mediaQueryList = window.matchMedia(query || json2mq(mediaQuery));

        this.state = {
            visible: this.mediaQueryList.matches,
        };
    }

    componentDidMount() {
        this.mediaQueryList.addListener(this.onChange);
    }

    componentWillUnmount() {
        this.mediaQueryList.removeListener(this.onChange);
    }

    onChange(event: MediaQueryListEvent) {
        this.setState({ visible: event.matches });
    }

    render() {
        const { visible } = this.state;

        const { children } = this.props;
        return visible && <React.Fragment>{children}</React.Fragment>;
    }
}

export default MediaQuery;
