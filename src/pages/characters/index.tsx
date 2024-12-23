import background from "../../assets/background.png";
import "./characters.css"
import {List} from "antd";
import CharacterCard from "../../components/character";
import {Link} from "react-router";
import btnClose from "../../assets/btn_close.png";

function Characters() {

	return (
		<>
			<div className="characters-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div><Link to={'/'}><img src={btnClose} className={'characters-close'} alt={'close'}/></Link></div>

				<div className={'characters-box'}>
					<List
						grid={{
							column: 3,
							gutter: 0,
						}}
						dataSource={Array.from({length: 30}, () => Math.floor(Math.random() * 40))}
						renderItem={(item) => (
							<List.Item>
								<div style={{width: 120, height: 180, margin: "auto"}}><CharacterCard id={item.toString()}/></div>
							</List.Item>
						)}
					/>
				</div>
			</div>

		</>
	)
}

export default Characters;
