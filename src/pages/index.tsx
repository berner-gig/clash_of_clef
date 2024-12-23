import {Flex, List} from "antd";
import background from "../assets/battle_background.png";
import slot from "../assets/slot.jpg";
import btnBattle from "../assets/btn_battle.png";
import btnRanking from "../assets/btn_leaderboard.png";
import btnMarket from "../assets/btn_market.png";
import btnTasks from "../assets/btn_tasks.png";
import btnRoles from "../assets/btn_roles.png";
import "./battle.css"
import {Link} from "react-router";
import {Carousel} from "react-carousel3";
import CharacterCard from "../components/character";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {

	return (
		<>
			<div className="battle-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>

				<div className="slot-container">
					<Carousel height={200} width={400} xOrigin={216} yOrigin={50} xRadius={180}>
						<div key={1} className={'slot'} style={{backgroundImage: `url(${slot})`, backgroundSize: 'cover'}}>
							<CharacterCard id={"10"}></CharacterCard>
						</div>
						<div key={2} className={'slot'} style={{backgroundImage: `url(${slot})`, backgroundSize: 'cover'}}>
							<CharacterCard id={"13"}></CharacterCard>
						</div>
						<div key={3} className={'slot'} style={{backgroundImage: `url(${slot})`, backgroundSize: 'cover'}}>
						</div>
						<div key={4} className={'slot'} style={{backgroundImage: `url(${slot})`, backgroundSize: 'cover'}}></div>
						<div key={5} className={'slot'} style={{backgroundImage: `url(${slot})`, backgroundSize: 'cover'}}>
							<CharacterCard id={"15"}></CharacterCard>
						</div>
					</Carousel>
				</div>

				<div className="roles-container">
					<Slider {...{
						className: "center",
						centerMode: true,
						infinite: false,
						centerPadding: "10px",
						slidesToShow: 3,
						slidesToScroll: 1,
						swipeToSlide: true,
					}}>
						{Array.from({length: 30}, () => Math.floor(Math.random() * 40)).map((item, index) => (
							<div style={{width: 120, height: 180}}><CharacterCard id={item.toString()}/></div>
						))}
						<div style={{width: 120, height: 180}}></div>
					</Slider>
				</div>

				<div className={'navigation'}>
					<Flex align={'flex-end'} justify={'space-around'}>
						<Link to={'/earn'}><img src={btnTasks} className={'navigation-item'} alt={'tasks'}/></Link>
						<Link to={'/characters'}><img src={btnRoles} className={'navigation-item'} alt={'roles'}/></Link>
						<Link to={'/'}><img src={btnBattle} className={'navigation-item-primary'} alt={'battle'}/></Link>
						<Link to={'/market'}><img src={btnMarket} className={'navigation-item'} alt={'market'}/></Link>
						<Link to={'/ranking'}><img src={btnRanking} className={'navigation-item'} alt={'ranking'}/></Link>
					</Flex>
				</div>
			</div>
		</>
	)
}

export default index;