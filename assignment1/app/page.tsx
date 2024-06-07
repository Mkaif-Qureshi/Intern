import PlanningServicesPage from './pages/PlanningServicesPage'
import FinanceServicesPage from './pages/FinanceServicesPage'
import ClickAndCollectServicePage from './pages/ClickAndCollectServicePage'
export default function Home() {
  return (
    <div className='container  md:px-12 max-w-7xl mx-auto px-6'>
      {/* <PlanningServicesPage /> */}
      {/* <FinanceServicesPage /> */}
      <ClickAndCollectServicePage />
    </div>
  );
}
