import React from "react";
import { FeaturesData } from "../../components/Cards/CardData";
import Button from "../../components/Button/Button.component";

import "../../components/Cards/Cards.styles.scss";
import "./Stories.styles.scss";

function Stories() {
	return (
		<>
			<section className="stories">
				<div className="stories__background"></div>

				<div className="stories__content">
					<h4 className="stories__latest">Last month's featured story</h4>
					<h1 className="stories__title">Hazy full moon of appalachia</h1>
					<p className="stories__date">
						March 2nd 2020 <span>by John Appleseed</span>
					</p>
					<p className="stories__description">
						The dissected plateau area, while not actually made up of geological
						mountains, is popularly called "mountains," especially in eastern
						Kentucky and West Virginia, and while the ridges are not high, the
						terrain is extremely rugged.
					</p>

					<Button className="stories__btn" type="submit">
						read the story
						<svg
							className="stories__arrow"
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
			</section>

			<section className="cards">
				{FeaturesData.map((item, index) => (
					<div className={item.cName} key={index}>
						<div className="cards__image">
							<img src={item.src} alt="Photosnap stories" />
						</div>

						<div className="cards__content">
							<h3>{item.date}</h3>
							<h4>{item.title}</h4>
							<h5>{item.prod}</h5>

							<div className="cards__cta">
								<Button className="hero__btn cards__btn" type="submit">
									{item.button}
								</Button>
								<svg
									className="hero__arrow white"
									xmlns="http://www.w3.org/2000/svg"
									width="43"
									height="14"
								>
									<g fill="none" fillRule="evenodd" stroke="#000">
										<path d="M0 7h41.864M35.428 1l6 6-6 6" />
									</g>
								</svg>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export default Stories;
