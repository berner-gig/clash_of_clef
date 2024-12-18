import {Container, Sprite, Stage, Text} from "@pixi/react";
import {useMemo} from "react";
import {BlurFilter} from "pixi.js";

// import background from '../assests/background.png';

const index = () => {
	const blurFilter = useMemo(() => new BlurFilter(4), []);

	return (
		<>
			<Stage width={1200} height={600} options={{background: 0xffffff}}>
				{/*<Sprite width={1200} height={600} image={background}/>*/}


			</Stage>
		</>
	)
}

export default index;