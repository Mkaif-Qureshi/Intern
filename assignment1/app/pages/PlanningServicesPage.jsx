import PlanningServices from '../components/planning/PlanningServices'
import PlanningGuide from '../components/planning/PlanningGuide'
import content from '../data/content.json';
import Plannings from '../components/planning/Plannings';
import Checkout from '../components/planning/Checkout';

export default function PlanningServicesPage() {
    return (
        <>
            <PlanningServices />
            <PlanningGuide content={content.PlanningGuide} />
            <Plannings content={content.plannings} />
            <Checkout content={content.checkout} />
        </ >
    )
}