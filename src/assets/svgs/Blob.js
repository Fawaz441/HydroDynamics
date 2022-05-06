import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Blob = () => {
    const {width, height} = useWindowDimensions();
    const X1 = (321.513 / 375) * width;
    const Y1 = (436.894 / 812) * height;
    const ancX1 = (202.821 / 375) * width;
    const ancY1 = (442.5 / 812) * height;
    const Y = (273.901 / 812) * height;
    const X2 = (84.1283 / 375) * width;
    const Y2 = (448.105 / 812) * height;
    const Y3 = (387.512 / 812) * height;
    return (
        <Svg
            width={width}
            height={(344 / 812) * height}
            viewBox={`0 0 ${width} ${(344 / 812) * height}`}
            fill="red"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d={`M${width} ${Y}C${width} ${Y} ${X1} ${Y1} ${ancX1} ${ancY1}C${X2} ${Y2} 0 ${Y3} 0 ${Y3}V0H${width}V${Y}Z`}
                fill="url(#paint0_linear_1_3)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_3"
                    x1={199}
                    y1={0}
                    x2={199}
                    y2={442.866}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#1DAEFF" />
                    <Stop offset="1" stopColor="#28428F" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default Blob;
