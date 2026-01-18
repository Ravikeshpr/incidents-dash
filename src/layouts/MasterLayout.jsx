import { ErrorBoundary } from '../components/common/ErrorBoundry'
import './MasterLayout.css'

const MasterLayout = ({ children }) => (
  <div className="master-layout-container">
    <header className="header">
      <h1>Incidents</h1>
    </header>
    <ErrorBoundary>
      <main className="main-content" id="main-content">
        {children}
      </main>
    </ErrorBoundary>
  </div>
)

export default MasterLayout
