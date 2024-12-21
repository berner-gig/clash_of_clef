import background from "../../assets/background.png";
import "./characters.css"
import {List} from "antd";
import CharacterCard from "../../components/character";

function Characters() {

	return (
		<>
			<div className="characters-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div className={'characters-box'}>
					<List
						grid={{
							column: 4,
							gutter: 0,
						}}
						dataSource={Array.from({length: 40}, () => Math.floor(Math.random() * 40))}
						renderItem={(item) => (
							<List.Item>
								<div style={{width: 80, height: 120, margin: "auto"}}><CharacterCard id={item.toString()}/></div>
							</List.Item>
						)}
					/>
				</div>
			</div>

		</>
	)
}

export default Characters;
