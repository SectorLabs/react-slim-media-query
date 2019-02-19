import React from 'react';

import renderer from 'react-test-renderer';
import MediaQuery from '../mediaQuery';

const createMockMediaMatcher = matches => () => ({
    matches,
    addListener: () => {},
    removeListener: () => {},
});

const runBasicTests = () =>
    [
        { minWidth: 1000 },
        { maxWidth: 1000 },
        { minDeviceWidth: 1000 },
        { maxDeviceWidth: 1000 },
        { minWidth: 1024, maxWidth: 1000 },
        { maxHeight: 1000 },
        { minHeight: 1000 },
        { minWidth: '1000px' },
        { maxWidth: '1000px', minWidth: 1024 },
        { query: 'max-device-width: 1000px' },
    ].forEach(values =>
        test('MediaQuery that matches using values', () => {
            const component = renderer.create(
                <MediaQuery {...values}>
                    <div>I should be heree</div>
                </MediaQuery>,
            );

            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        }),
    );

describe('Media query that match', () => {
    beforeEach(() => {
        window.matchMedia = createMockMediaMatcher(true);
    });

    runBasicTests();
});

describe("Media query that doesn't match", () => {
    beforeEach(() => {
        window.matchMedia = createMockMediaMatcher(false);
    });

    runBasicTests();
});
