import "./character.css"
import * as React from "react";
import {useEffect, useRef} from "react";
import defaultBackground from "../assets/slot.jpg"
import levelBackground from "../assets/characters/level_bg.jpeg"
import propSkill from "../assets/characters/prop_skill.png"
import propAccuracy from "../assets/characters/prop_accuracy.png"
import propRhythm from "../assets/characters/prop_rhythm.png"
import {Flex, Typography} from "antd";


interface Character {
	id: string
	position: string
	skill: number
	accuracy: number
	rhythm: number
	level: number
}

const positions = ["cello", "flute", "guitar", "piano", "singer"]


function random(min: number, max: number): number {
	min = Math.ceil(min); // Ensure min is inclusive
	max = Math.floor(max); // Ensure max is exclusive
	return Math.floor(Math.random() * (max - min) + min);
}

function CharacterCard({id}: { id: string }) {
	const [background, setBackground] = React.useState<string>(defaultBackground);
	const [header, setHeader] = React.useState<string>('');
	const [roleImage, setRoleImage] = React.useState<string>('');

	const role: Character = {
		id: id,
		position: positions[random(0, positions.length)],
		skill: random(1, 10),
		accuracy: random(1, 10),
		rhythm: random(1, 10),
		level: random(1, 50),
	}

	useEffect(() => {
		import(`../assets/characters/${role.position}_bg.jpeg`).then((image) =>
			setBackground(image.default)
		).catch(() => console.error(role));
		import(`../assets/characters/${role.position}_header.png`).then((image) =>
			setHeader(image.default)
		).catch((err) => console.error(err));
		import(`../assets/characters/${role.position}.png`).then((image) =>
			setRoleImage(image.default)
		).catch((err) => console.error(err));
	})

	return (
		<>
			<div className="character-card" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div className="character-card-header"
				     style={{backgroundImage: `url(${header})`, backgroundSize: 'cover'}}></div>
				<div className="character-card-role" style={{backgroundImage: `url(${roleImage})`}}></div>
				<div className="character-card-property">
					<Flex justify={'space-around'} align={'center'}>
						<div className="character-card-property-item" style={{backgroundImage: `url(${propSkill})`, backgroundSize: 'cover'}}>{role.skill}</div>
						<div className="character-card-property-item" style={{backgroundImage: `url(${propRhythm})`, backgroundSize: 'cover'}}>{role.rhythm}</div>
						<div className="character-card-property-item" style={{backgroundImage: `url(${propAccuracy})`, backgroundSize: 'cover'}}>{role.accuracy}</div>
					</Flex>
				</div>
				<div className="character-card-level" style={{backgroundImage: `url(${levelBackground})`}}>
					<Flex justify={'center'} align={'center'}>
						<span className="character-card-level-info">Level {role.level}</span>
					</Flex>
				</div>
			</div>
		</>
	)
}

export default CharacterCard;
