import background from "../../assets/background.png";
import {List} from "antd";
import CharacterCard from "../../components/character";
import "./market.css"

function Market() {

	return (
		<>
			<div className="market-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div className={'market-box'}>
				</div>
			</div>
		</>
	)
}

export default Market;
