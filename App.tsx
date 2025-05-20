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
import { home } from 'ionicons/icons';
import Loader from './pages/Loader';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/loading">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/loading" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/loading" component={Loader} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/segunda" component={Home} exact />
        <Route path="/purchases" component={Moves} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
