import background from "../../assets/background.png";
import "./characters.css"

function Characters() {

	return (
		<>
			<div className="characters-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div className={'characters-box'}>

				</div>
			</div>

		</>
	)
}

export default Characters;
