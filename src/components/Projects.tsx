import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">projects</h3>

			{/* Project 1 */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/perpus.png"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Website Anggota Perpustakaan
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Website ini merupakan hasil proyek <em>UTS</em> mata kuliah <em>Pemrograman Web</em> yang saya kembangkan menggunakan PHP, MySQL, HTML, CSS, dan Bootstrap. 
						Sistem ini dirancang untuk <strong>anggota perpustakaan</strong> agar dapat melihat daftar buku yang tersedia, 
						memberikan <strong>ulasan</strong> tentang perpustakaan, serta dapat melihat profil pengguna melalui halaman dashboard.
					</p>

					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Web App
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							PHP
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							MySQL
						</span>
					</div>
				</div>
			</div>


			{/* Project 2 */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/brownies.png"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">Brownies Shop Online System</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Proyek ini merupakan hasil tugas UAS mata kuliah <em>Pemrograman Web</em> yang saya kembangkan menggunakan HTML, CSS, PHP, MySQL, dan Bootstrap.
						Website <strong>Brownies Shop</strong> ini memiliki fitur pemesanan online yang interaktif, melakukan pemesanan dengan form terhubung ke database, serta mencetak struk pesanan.
					</p>

					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							E-Commerce
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							PHP
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							MySQL
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
