import * as React from "react"
import Svg, {Path} from 'react-native-svg'

interface ISearchIconProperties{
    width:number;
    height:number;
}

const SearchIcon:React.FC<ISearchIconProperties> = ({height,width}) => (
    <Svg
        width={width}
        height={height}
        fill="none"
        viewBox="0 -0.5 25 25"

    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.5 10.765a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.029 16.53 19.5 19"
        />
    </Svg>
)
export default SearchIcon