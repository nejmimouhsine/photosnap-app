import React from "react";
import Button from "../../components/Button/Button.component";
import { HomepageItems } from "./HomepageItems";
import Cards from "../../components/Cards/Cards.component";
import Feature from "../../components/Feature/Feature.component";

import create from "../../assets/home/desktop/create-and-share.jpg";
import createMedium from "../../assets/home/mobile/create-and-share.jpg";

import "./Homepage.style.scss";

function Homepage() {
	return (
		<>
			<section className="hero">
				<div className="hero__content">
					<h1 className="hero__title">CREATE AND SHARE YOUR PHOTO STORIES</h1>
					<p className="hero__para">
						Photosnap is a platform for photographers and visual storytellers.
						We make it easy to share photos, tell stories and connect with
						others.
					</p>
					<Button className="hero__btn" type="submit">
						get an invite
						<svg
							className="hero__arrow"
							xmlns="http://www.w3.org/2000/svg"
							width="43"
							height="14"
						>
							<g fill="none" fillRule="evenodd" stroke="#000">
								<path d="M0 7h41.864M35.428 1l6 6-6 6" />
							</g>
						</svg>
					</Button>
				</div>

				<div className="hero__image">
					<picture>
						<source srcSet={`${createMedium} 1x`} media="(max-width: 500px)" />
						<img
							className="logo__apple"
							srcSet={`${create} 2x`}
							alt="Photosnap App"
						/>
					</picture>
				</div>
			</section>

			{HomepageItems.map((item, index) => (
				<section className={item.cName} key={index}>
					<div className="hero__content white">
						<h1 className="hero__title">{item.title}</h1>
						<p className="hero__para">{item.paragraph}</p>
						<Button className="hero__btn white" type="submit">
							{item.button}
							<svg
								className="hero__arrow"
								xmlns="http://www.w3.org/2000/svg"
								width="43"
								height="14"
							>
								<g fill="none" fillRule="evenodd" stroke="#000">
									<path d="M0 7h41.864M35.428 1l6 6-6 6" />
								</g>
							</svg>
						</Button>
					</div>

					<div className="hero__image">
						<picture>
							<source srcSet={`${item.srcSet} 1x`} media="(max-width: 500px)" />
							<img
								className="logo__apple"
								srcSet={`${item.src} 2x`}
								alt="Photosnap App"
							/>
						</picture>
					</div>
				</section>
			))}

			<Cards />
			<Feature />
		</>
	);
}

export default Homepage;
