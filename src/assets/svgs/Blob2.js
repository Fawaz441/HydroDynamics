import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Blob2 = () => {
    const {width, height} = useWindowDimensions();
    console.log(height);
    return (
        <Svg
            width="526"
            height={(515 / 873.71) * height}
            viewBox="0 0 526 443"
            // width={width}
            // height=
            // height={(443 / 812) * height}
            // viewBox={`0 0 ${width} ${(443 / 812) * height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M526 273.984C526 273.984 424.914 437.026 268.05 442.634C111.185 448.241 0 387.63 0 387.63V0H526V273.984Z"
                fill="url(#paint0_linear_1_2)"
                fillOpacity={0.2}
                // fill-opacity="0.2"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_2"
                    x1="263"
                    y1="0"
                    x2="263"
                    y2="443"
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#1DAEFF" />
                    <Stop offset="1" stopColor="#28428F" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default Blob2;
