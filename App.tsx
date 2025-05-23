import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.scss';
import Moves from './pages/moves/Moves';
import Menu from './components/Menu';
import Loader from './pages/loader/Loader';
import customPageTransition from './CustomPageTranscition';
import Api from './pages/api-test/Api';
import Person from './pages/person/Person';

setupIonicReact({
  navAnimation: customPageTransition,
});


const App: React.FC = () => (
  <IonApp>
      <Menu />
    <IonReactRouter>
      <IonRouterOutlet
        animation={customPageTransition}
      >
        <Route path="/" render={() => <Redirect to="/loading" />} exact />
        <Route path="/loading" component={Loader} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/api" component={Api} exact />
        <Route path="/ataques" component={Moves} exact />
        <Route path="/person" component={Person} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
