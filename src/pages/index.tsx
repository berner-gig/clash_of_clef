import background from "../assests/battle_background.png";
import "./battle.css"

// import background from '../assests/loading.png';

const index = () => {


	return (
		<>
			<div className="battle-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
			</div>
		</>
	)
}

export default index;