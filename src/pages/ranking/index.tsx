import background from "../../assets/background.png";
import {Avatar, Button, Flex, List, Segmented, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import "./ranking.css"
import {ReactElement} from "react";

const {Paragraph} = Typography;

interface User {
	id: number;
	name: string;
	avatar: ReactElement;
	score: number;
}

const accounts: User[] = [
	{
		id: 1,
		name: "Name",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 2,
		name: "Name",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 3,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	}, {
		id: 4,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 5,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 6,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 7,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 8,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 9,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	},
	{
		id: 10,
		name: "",
		avatar: <UserOutlined/>,
		score: 15000,
	}
]

function Leaderboard() {

	return (
		<>
			<div className="leaderboard-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div className={'leaderboard-box'}>

					<div className="leaderboard-header">
						<Flex justify={'center'}>
							<Typography.Title level={1} className={'leaderboard-title'}>Leaderboard</Typography.Title>
						</Flex>
					</div>
					<div className={'leaderboard-content'}>
						<div>

						</div>
						<List
							size="small"
						>
							{
								accounts.map((task: User, idx) => (
									<List.Item
										key={idx}
										className={'leaderboard-item'}
									>
										<Flex
											key={task.id}
											gap={'small'}
										>
											<span className={'leaderboard-item-rank'}>#{idx+1}</span>
											<Avatar size={24} icon={task.avatar} className={'leaderboard-item-avatar'}></Avatar>
											<span className={'leaderboard-item-name'}>
												{task.name}
											</span>
											<span className={'leaderboard-item-score'}>
												{task.score}
											</span>
										</Flex>
									</List.Item>
								))
							}
						</List>
					</div>
				</div>
			</div>
		</>
	)
}

export default Leaderboard;