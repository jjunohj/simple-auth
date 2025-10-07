import { GlobalPortal } from 'GlobalPortal';
import { Routes } from 'pages/Routes';
import JotaiProvider from 'providers/JotaiProvider';
import ReactQueryProvider from 'providers/ReactQueryProvider';

export default function App() {
  return (
    <ReactQueryProvider>
      <JotaiProvider>
        <GlobalPortal.Provider>
          <Routes />
        </GlobalPortal.Provider>
      </JotaiProvider>
    </ReactQueryProvider>
  );
}
