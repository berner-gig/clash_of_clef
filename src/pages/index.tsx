import {Container, Sprite, Stage, Text} from "@pixi/react";
import {useMemo} from "react";
import {BlurFilter} from "pixi.js";

const index = () => {
	const blurFilter = useMemo(() => new BlurFilter(4), []);

	return (
		<>
			<Stage width={1000} height={600} options={{background: 0xffffff}}>
				<Sprite
					image="https://pixijs.io/pixi-react/img/bunny.png"
					x={400}
					y={270}
					anchor={{x: 0.5, y: 0.5}}
				/>

				<Container x={400} y={330}>
					<Text text="Hello World" anchor={{x: 0.5, y: 0.5}} filters={[blurFilter]}/>
				</Container>
			</Stage>
		</>
	)
}

export default index;