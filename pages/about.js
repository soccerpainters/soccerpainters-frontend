import React, { Component } from 'react';
import CenterScreen from '../global/CenterScreen';

class About extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<>
				<CenterScreen className="py-16">
					<span className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Addo etiam illud, multa iam mihi dare signa puerum et pudoris et ingenii, sed aetatem vides. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Duo Reges: constructio interrete. Idemne potest esse dies saepius, qui semel fuit? In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Quae quidem vel cum periculo est quaerenda vobis; Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen;</span>
				</CenterScreen>

			</>
		)
	}
}

export default About;