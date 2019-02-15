import * as React from 'react';
// import { Rate } from 'antd';
import './App.scss';
import { Header } from './components';
import { LoadingSpinnerComponent } from './common/components/spinner/loadingSpinner';

// import logo from './logo.svg';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <LoadingSpinnerComponent />
      <Header />
    </div>
  );
};

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="container-fluid">
//         <Header />
//       </div>
//       // <div className="App">
//       //   <div className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h2>Welcome to React</h2>
//       //   </div>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.tsx</code> and save to reload.
//       //   </p>
//       //   <Rate character="6"/>
//       // </div>
//     );
//   }
// }

// export default App;
