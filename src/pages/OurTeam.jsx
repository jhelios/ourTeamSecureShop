const team = [
	{
		name: "J. helios",
		role: "Developer / Manager",
		imageUrl:
			"https://images.contentstack.io/v3/assets/blt93c07aad6c2c008a/blt14f09133cde7e669/63ea6e7045a8fc180467ba96/Akshan_0.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Kaoru Rey",
		role: " Human Resources / Finance",
		imageUrl: "https://i.pinimg.com/736x/5c/5c/75/5c5c75df2fb07ac2dc7a91651ae69305.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Frank 3Xploit",
		role: "Security / Manager",
		imageUrl:
			"https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2023/05/10/hacker-3342696.jpeg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Miguel Smith",
		role: "Sysadmin",
		imageUrl: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.11.1/CHAMPION_SKIN/126005/ICON",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Anna Pulse",
		role: "Analytics",
		imageUrl:
			"https://www.egames.news/__export/1603380423251/sites/debate/img/2020/10/22/creador_de_jhin_y_senna_pasa_a_ser_disexador_principal_de_lol.png_718887415.png",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Dante Rop",
		role: "Marketing",
		imageUrl: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.11.1/CHAMPION_SKIN/236019/ICON",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
]

const OurTeam = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8 flex flex-col items-center justify-center py-16">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Conoce nuestro equipo de eShop
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						El equipo que lleva las ventas en linea a otro nivel.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
				>
					{team.map((person) => (
						<li key={person.name}>
							<img className="mx-auto h-44 w-44 rounded-full" src={person.imageUrl} alt="" />
							<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
								{person.name}
							</h3>
							<p className="text-sm leading-6 text-gray-600">{person.role}</p>
							<ul role="list" className="mt-6 flex justify-center gap-x-6">
								<li>
									<a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
										<span className="sr-only">Twitter</span>
										<svg
											className="h-5 w-5 hover:text-cyan-600"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
										</svg>
									</a>
								</li>
								<li>
									<a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
										<span className="sr-only">LinkedIn</span>
										<svg
											className="h-5 w-5 hover:text-blue-700"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</li>
					))}
				</ul>
				<p className="mt-16 leading-8 text-gray-600">Sitio en construcción...</p>
			</div>
		</div>
	)
}

export { OurTeam }
