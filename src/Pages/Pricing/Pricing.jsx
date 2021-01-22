import React, { useState } from "react";
import Beta from "../../components/Beta/Beta.component";
import Plans from "../../components/Plans/Plans.component";

import "./Pricing.styles.scss";
import "../homepage/Homepage.style.scss";
import "../../components/Feature/Feature.styles.scss";
import { PlanData } from "./PlanData";

function Pricing() {
	const [toggle, setToggle] = useState(false);

	const ChangePrice = () => setToggle(!toggle);

	return (
		<>
			<section className="pricing features hero">
				<div className="features__content hero__content">
					<h1 className="features__title hero__title">Pricing</h1>
					<p className="features__para hero__para">
						Create a your stories, Photosnap is a platform for photographers and
						visual storytellers. It’s the simple way to create and share your
						photos.
					</p>
				</div>

				<div className="pricing__image hero__image"></div>
			</section>

			<section className="pricing__cards">
				<div className="pricing__switch">
					<span className={toggle ? "pricing__month" : "pricing__month active"}>
						Monthly
					</span>
					<div
						className={toggle ? "pricing__toggle active" : "pricing__toggle"}
						onClick={ChangePrice}
					>
						<div
							className={toggle ? "pricing__notch active" : "pricing__notch"}
							onClick={ChangePrice}
						></div>
					</div>
					<span className={toggle ? "pricing__year active" : "pricing__year"}>
						Yearly
					</span>
				</div>

				<div className="pricing__plans">
					{PlanData.map((item, index) => (
						<Plans
							key={index}
							planCName={item.planCName}
							type={item.type}
							feature={item.feature}
							price={toggle ? item.priceYear : item.priceMonth}
							time={toggle ? item.timeYear : item.timeMonth}
							btnCName={item.btnCName}
						/>
					))}
				</div>
			</section>

			<Beta />
		</>
	);
}

export default Pricing;
