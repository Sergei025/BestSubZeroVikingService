// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function randomShake() {
	const icon = document.querySelector('.header-call-button__icon')
	icon.classList.add('shake')
	setTimeout(() => icon.classList.remove('shake'), 600) // убрать после анимации

	const nextTime = Math.random() * (30000 - 20000) + 20000 // 20-30 сек
	setTimeout(randomShake, nextTime)
}

randomShake()

// Находим все элементы меню
const menuItems = document.querySelectorAll('header .menu__item')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Сначала убираем класс у всех элементов
        menuItems.forEach(i => i.classList.remove('_navigator-active'));

        // Добавляем класс только к кликнутому
        item.classList.add('_navigator-active')
    });
});

document.addEventListener('DOMContentLoaded', () => {
	const radios = document.querySelectorAll('.location-selector__radio')
	const mapImg = document.getElementById('location-map')
	const mapLink = document.querySelector('.location-selector__map a')

	// Сопоставляем значения radio с картинками и ссылками
	const mapData = {
		cary: {
			img: 'img/location-maps/Cary.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Cary, NC',
			alt: 'Cary, NC',
		},
		morrisville: {
			img: 'img/location-maps/Morrisville.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Morrisville, NC',
			alt: 'Morrisville, NC',
		},
		apex: {
			img: 'img/location-maps/Apex.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Apex, NC',
			alt: 'Apex, NC',
		},
		hayesbarton: {
			img: 'img/location-maps/HayesBarton.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Hayes Barton, NC',
			alt: 'Hayes Barton',
		},
		northhills: {
			img: 'img/location-maps/NorthHills.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=North Hills, NC',
			alt: 'North Hills (Midtown)',
		},
		budleigh: {
			img: 'img/location-maps/Budleigh.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Budleigh, NC',
			alt: 'Budleigh',
		},
		historicoakwood: {
			img: 'img/location-maps/HistoricOakwood.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Historic Oakwood, NC',
			alt: 'Historic Oakwood',
		},
		cameronvillage: {
			img: 'img/location-maps/CameronVillage.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Cameron Village, NC',
			alt: 'Cameron Village',
		},
		durham: {
			img: 'img/location-maps/Durham.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Durham, NC',
			alt: 'Durham, NC',
		},
		chapelhill: {
			img: 'img/location-maps/ChapelHill.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Chapel Hill, NC',
			alt: 'Chapel Hill, NC',
		},
		wakeforest: {
			img: 'img/location-maps/WakeForest.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Wake Forest, NC',
			alt: 'Wake Forest, NC',
		},
		briercreek: {
			img: 'img/location-maps/BrierCreek.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Brier Creek, NC',
			alt: 'Brier Creek',
		},
		countryclubhills: {
			img: 'img/location-maps/CountryClub.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Country Club Hills, NC',
			alt: 'Country Club Hills',
		},
		glenwood: {
			img: 'img/location-maps/Glenwood.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Glenwood, NC',
			alt: 'Glenwood',
		},
		cameronpark: {
			img: 'img/location-maps/CameronPark.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Cameron Park, NC',
			alt: 'Cameron Park / Forest Park',
		},
		boylanheights: {
			img: 'img/location-maps/BoylanHeights.webp',
			link: 'https://www.google.com/maps/search/?api=1&query=Boylan Heights, NC',
			alt: 'Boylan Heights',
		},
	}


	radios.forEach(radio => {
		radio.addEventListener('change', () => {
			const value = radio.value
			if (mapData[value]) {
				mapImg.src = mapData[value].img
				mapImg.alt = mapData[value].alt
				mapLink.href = mapData[value].link
			}
		})
	})
})

import AOS from 'aos'
import 'aos/dist/aos.css'

document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 768) {
		AOS.init({
			duration: 800, // время анимации
			once: true, // проигрывать анимацию только один раз
			offset: 200, // с какой дистанции до элемента запускать
			easing: 'ease-in-out', // плавное появление
		})

		// Задаём задержку для каждого шага, чтобы появлялись последовательно
		const steps = document.querySelectorAll('[data-aos="fade-up"]')
		steps.forEach((step, index) => {
			step.setAttribute('data-aos-delay', index * 150) // 150ms разница между шагами
		})
	}
})


document.getElementById('footer__to-top').addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.addEventListener('DOMContentLoaded', () => {
	const animElems = document.querySelectorAll('[data-anim]')
	const steps = document.querySelectorAll('.how-it-works__step')

	function handleAnim() {
		const windowHeight = window.innerHeight

		animElems.forEach(elem => {
			const rect = elem.getBoundingClientRect().top

			if (rect - windowHeight / 2 <= 0) {
				elem.classList.add('_anim')

				// Добавляем _active для шагов внутри блока
				steps.forEach((step, i) => {
					setTimeout(() => {
						step.classList.add('_active')
					}, i * 700) // задержка совпадает с линией
				})
			}
		})
	}

	window.addEventListener('scroll', handleAnim)
	window.addEventListener('resize', handleAnim)
	handleAnim()
})


