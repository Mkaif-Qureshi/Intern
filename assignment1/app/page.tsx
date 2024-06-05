import PlanningServices from './components/PlanningServices'
import PlanningGuide from './components/PlanningGuide'
import content from './data/content.json';


export default function Home() {
  return (
    <div className='md:px-12 max-w-7xl mx-auto px-6'>
      <PlanningServices />
      <PlanningGuide content={content}/>
    </div >
  );
}
