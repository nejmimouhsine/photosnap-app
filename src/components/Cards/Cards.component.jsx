import React from "react";
import Button from "../Button/Button.component";
import { CardData } from "./CardData";

import "./Cards.styles.scss";

function Cards() {
	return (
		<section className="cards">
			{CardData.map((item, index) => (
				<div className={item.cName} key={index}>
					<div className="cards__image">
						<picture>
							<source srcSet={`${item.srcSet} 1x`} media="(max-width: 900px)" />
							<img
								className="logo__apple"
								srcSet={`${item.src} 2x`}
								alt="Photosnap App"
							/>
						</picture>
					</div>

					<div className="cards__content">
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
	);
}

export default Cards;
