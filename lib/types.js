// @flow

export type Features = {
    minAspectRatio?: string,
    maxAspectRatio?: string,

    minDeviceAspectRatio?: string,
    maxDeviceAspectRatio?: string,

    minHeight?: number | string,
    maxHeight?: number | string,

    minDeviceHeight?: number | string,
    maxDeviceHeight?: number | string,

    minWidth?: number | string,
    maxWidth?: number | string,

    minDeviceWidth?: number | string,
    maxDeviceWidth?: number | string,

    minColor?: number,
    maxColor?: number,

    minColorIndex?: number,
    maxColorIndex?: number,

    minMonochrome?: number,
    maxMonochrome?: number,

    minResolution?: number | string,
    maxResolution?: number | string,
};

export type MediaTypes = {
    all: boolean,
    grid: boolean,
    aural: boolean,
    braille: boolean,
    handheld: boolean,
    print: boolean,
    projection: boolean,
    screen: boolean,
    tty: boolean,
    tv: boolean,
    embossed: boolean,
};
