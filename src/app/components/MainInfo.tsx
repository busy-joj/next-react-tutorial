import Link from 'next/link'
import React from 'react'

export const mainInfo = [
	{
		title: '여기어때 비즈니스',
		img: './img/main/b2b_banner.png',
		path: 'https://www.goodchoice.kr/b2b/intro',
		desc: `출장부터 복지까지 \n 여기어때 비즈니스로 스마트하게`,
	},
	{
		title: '여기어때 서체 출시',
		img: './img/main/re_jalnan.png',
		path: 'https://www.goodchoice.kr/font',
		desc: `젊고 당당한 여기어때 잘난체 \n 지금 다운로드 받으세요!`,
	},
]

const MainInfo = () => {
	return (
		<div className="main-info">
			<h2>여기어때 소식</h2>
			<ul className="flex gap-4">
				{mainInfo.map((item, idx) => {
					return (
						<li
							key={idx}
							className="border border-solid border-black/[.08] w-[473px]">
							<Link
								href={item.path}
								className="flex pr-[24px] gap-6 text-[rgba(0,0,0,0.56)]">
								<img
									src={item.img}
									alt=""
									width="162"
									height="162"
								/>
								<span className="flex flex-col pt-[38px] gap-4">
									<strong className="font-normal text-xl text-[#00796b]">
										{item.title}
									</strong>
									{item.desc}
								</span>
							</Link>
						</li>
					)
				})}
			</ul>
			<div className="main-info-appdown relative w-[962px] h-[320px] mt-[64px] mb-[78px]">
				<img src="./img/main/bg_appdown.png" alt="" />
				<div className="absolute w-full flex flex-col justify-center items-center inset-y-0 gap-4">
					<p className="text-[28px]">
						앱 다운 받고 <b>더 많은 혜택</b> 받으세요
					</p>
					<div className="flex gap-2">
						<Link
							href="https://play.google.com/store/apps/details?id=kr.goodchoice.abouthere&pli=1"
							target="_blank"
							title="구글플레이 새창">
							<img
								src="./icons/banner_and.png"
								width="168px"
								alt=""
							/>
						</Link>
						<Link
							href="https://apps.apple.com/kr/app/yeogieottae-1deung-sugbag/id884043462?ign-mpt=uo%3D2"
							target="_blank"
							title="앱스토어 새창">
							<img
								src="./icons/banner_ios.png"
								width="168px"
								alt=""
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainInfo
