import PlanningServices from './components/PlanningServices'
import PlanningGuide from './components/PlanningGuide'
import content from './data/content.json';
import Plannings from './components/Plannings';


export default function Home() {
  return (
    <div className='container  md:px-12 max-w-7xl mx-auto px-6'>
      <PlanningServices />
      <PlanningGuide content={content.PlanningGuide} />
      <Plannings content={content.plannings} />
    </div >
  );
}
