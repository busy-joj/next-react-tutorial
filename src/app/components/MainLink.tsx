import Link from 'next/link'
import React from 'react'

export const mainLinks = [
	// path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
	{
		name: '모텔',
		icon: './icons/ico_category_01.png',
		path: '/',
	},
	{
		name: '호텔·리조트',
		icon: './icons/ico_category_02.png',
		path: '/',
	},
	{
		name: '펜션',
		icon: './icons/ico_category_03.png',
		path: '/',
	},
	{
		name: '게스트하우스',
		icon: './icons/ico_category_04.png',
		path: '/',
	},
	{
		name: '캠핑·글램핑',
		icon: './icons/ico_category_05.png',
		path: '/',
	},
]

const MainLink = () => {
	return (
		<div className="main-link pt-8 pb-8">
			<ul className="flex justify-evenly">
				{mainLinks.map((link, idx) => {
					return (
						<li key={idx} className="w-[163px]">
							<Link
								href={link.path}
								className="flex flex-col items-center gap-3.5">
								<span className="block w-[72px] h-[72px]">
									<img
										src={link.icon}
										width="432"
										height="432"
										alt=""
									/>
								</span>
								<span className="text-lg">{link.name}</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default MainLink
