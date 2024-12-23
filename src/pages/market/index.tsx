import background from "../../assets/background.png";
import {List} from "antd";
import CharacterCard from "../../components/character";
import "./market.css"
import {Link} from "react-router";
import btnClose from "../../assets/btn_close.png";

function Market() {

	return (
		<>
			<div className="market-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div><Link to={'/'}><img src={btnClose} className={'market-close'} alt={'close'}/></Link></div>
				<div className={'market-box'}>
				</div>
			</div>
		</>
	)
}

export default Market;
