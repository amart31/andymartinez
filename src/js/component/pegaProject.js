import React from "react";

import { Title } from "./title";

import armaLifeCycle from "../../img/armaCaseLifeCycle.png";
import armaNeoCase from "../../img/armaNeoCase.png";

export const Pega = () => (
	<div className="section-pega">
		<Title title="ARMA Pega Application" />
		<div className="row">
			<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 align-self-center h-100">
				<ul className="pega-list">
					<li className="pega-list--item">
						Configured an <strong>Enterprise Class Structure</strong> to configure rule reusability and
						enforce best practices.
					</li>
					<li className="pega-list--item">
						Created Access groups, work groups, and work queues to account for the different roles and
						operators within the organization.
					</li>
					<li className="pega-list--item">
						Configured and added Data Types to the <strong>Pega System of Record</strong> in order to manage
						data more efficiently.
					</li>
					<li className="pega-list--item">
						Established SLAs in order to assign urgency levels to assignments and ensure timely completion
						of assignments.
					</li>
					<li className="pega-list--item">
						Designed the Case Hierarchy to account for the relationship between the parent and child cases.
					</li>
					<li className="pega-list--item">
						Created custom views to collect some of the necessary information needed to process the case.
					</li>
					<li className="pega-list--item">
						Modified UI rules (harness, skin, sections) to ensure the user experience is maximized and
						worker efficiency increased.
					</li>
					<li className="pega-list--item">
						Applied data transforms and declared expressions to set property values automatically.
					</li>
				</ul>
			</div>
			<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-wrapper p-0 d-flex justify-content-center">
				<img className="pega-project mb-2" src={armaLifeCycle} />
				<br />
				<img className="pega-project mt-2" src={armaNeoCase} />
			</div>
		</div>
	</div>
);
