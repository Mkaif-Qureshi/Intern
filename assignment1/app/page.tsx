import PlanningServicesPage from './pages/PlanningServicesPage'
import FinanceServicesPage from './pages/FinanceServicesPage'

export default function Home() {
  return (
    <div className='container  md:px-12 max-w-7xl mx-auto px-6'>
      {/* <PlanningServicesPage /> */}
      <FinanceServicesPage />
    </div>
  );
}
