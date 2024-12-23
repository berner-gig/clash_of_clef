import "./earn.css";

import background from "../../assets/background.png"
import {UserOutlined, XOutlined, DiscordOutlined} from '@ant-design/icons';
import {Avatar, Button, Flex, List, Segmented, Typography} from "antd";
import {ReactNode, useState} from "react";
import {Link} from "react-router";
import btnClose from "../../assets/btn_close.png";

const {Paragraph} = Typography;

interface Task {
	id: number;
	type: string
	icon: ReactNode
	title: string
	description: string
	reward: string
}

const tasks = [
	{
		id: 1,
		type: 'twitter',
		icon: <XOutlined/>,
		title: 'Follow @Account',
		reward: '50 Points',
		description: 'Follow our Twitter account for latest updates'
	},
	{
		id: 2,
		type: 'telegram',
		icon: <DiscordOutlined/>,
		title: 'Join Community',
		reward: '100 Points',
		description: 'Join our Telegram community channel'
	},
	{
		id: 3,
		type: 'twitter',
		icon: <XOutlined/>,
		title: 'Retweet',
		reward: '75 Points',
		description: 'Retweet our latest announcement'
	},
	{
		id: 4,
		type: 'telegram',
		icon: <DiscordOutlined/>,
		title: 'Share Sticker',
		reward: '25 Points',
		description: 'Share our sticker pack in any group'
	},
	{
		id: 5,
		type: 'telegram',
		icon: <DiscordOutlined/>,
		title: 'Share Sticker',
		reward: '25 Points',
		description: 'Share our sticker pack in any group'
	},
	{
		id: 6,
		type: 'telegram',
		icon: <DiscordOutlined/>,
		title: 'Share Sticker',
		reward: '25 Points',
		description: 'Share our sticker pack in any group'
	}
]

function Earn() {
	const [activePanel, setActivePanel] = useState<string>('tasks');

	return (
		<>
			<div className="earn-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
				<div><Link to={'/'}><img src={btnClose} className={'earn-close'} alt={'close'}/></Link></div>

				<div className={'earn-box'}>

					<div className="earn-header">
						<Flex justify={'center'}>
							<Avatar size={64} icon={<UserOutlined/>}/>
						</Flex>
						<Flex justify={'center'}>
							<p>username</p>
						</Flex>
					</div>
					<div className={'earn-content'}>
						<Segmented
							value={activePanel}
							block={true}
							onChange={(value) => setActivePanel(value)}
							options={[
								{
									label: (
										<p>Tasks</p>
									),
									value: 'tasks',
								},
								{
									label: (
										<p>Achievement</p>
									),
									value: 'achievement',
								},
							]}
						/>
						<div>
							<div className={'earn-tasks'}>
								<List
									size="small"
								>
									{
										tasks.map((task: Task, idx) => (
											<List.Item
												key={idx}
												className={'task-item'}
												extra={[
													<Button type={'primary'}>Go</Button>
												]}
											>
												<Flex
													key={task.id}
													gap={'small'}
												>
													<div>
														<Avatar size={22} icon={task.icon}></Avatar>
													</div>
													<div style={{minWidth: '80%'}}>
														<Paragraph className={'task-title'}>
															{task.title}
														</Paragraph>
														<Paragraph>
															{task.reward}
														</Paragraph>
													</div>
												</Flex>
											</List.Item>
										))
									}
								</List>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Earn;
