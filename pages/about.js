import React, { Component } from 'react';
import styled from "styled-components";

import { media } from '../theme'
import Layout from '../global/Layout';

import Blue from '../assets/images/logo-blue.svg'
import Pink from '../assets/images/logo-pink.svg'

const Image = styled.img`
	width: ${props => props.size}px;
`

const About = styled.div`
	${tw` p-6 `}

	${media.md`
		${tw` flex justify-center items-center `}
	`}
`

class AboutComp extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<Layout Footer={ () =>
				<div className="flex justify-between p-4">
					<span><a href="https://twitter.com/SoccerPainters" className="text-black no-underline">Twitter</a></span>
					<span><a href="https://www.instagram.com/soccerpainters/" className="text-black no-underline">Instgram</a></span>
				</div>
			}>
				<About>
					<div>
						<div className="relative">
							<div className="hidden md:inline-block absolute pin-r z-10"><Image size="100" src={Pink} alt="Logo-Pink" /></div>
							<p className="md:text-center md:text-xl md:leading-loose z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Addo etiam illud, multa iam mihi dare signa puerum et pudoris et ingenii, sed aetatem vides. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Duo Reges: constructio interrete. Idemne potest esse dies saepius, qui semel fuit? In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Quae quidem vel cum periculo est quaerenda vobis; Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen;</p>
						</div>
						<div className="flex">
							<div><Image size="75" src={Blue} alt="Logo-Blue" /></div>
							<div className="md:hidden"><Image size="100" src={Pink} alt="Logo-Pink" /></div>
						</div>
						
					</div>
				</About>
			</Layout>
		)
	}
}

export default AboutComp;