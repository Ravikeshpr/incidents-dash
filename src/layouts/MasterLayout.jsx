import { ErrorBoundary } from '../components/common/ErrorBoundry'
import { ARIA_TEXT } from '../constants/constants'
import './MasterLayout.css'

const MasterLayout = ({ children }) => (
  <div className="master-layout-container">
    <a href="#main-content" className="skip-link">
      {ARIA_TEXT.skipToContent}
    </a>
    <header className="header" role="banner">
      <h1>Incidents</h1>
    </header>
    <ErrorBoundary>
      <main
        className="main-content"
        id="main-content"
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
    </ErrorBoundary>
  </div>
)

export default MasterLayout
