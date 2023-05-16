import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonCol, IonContent, IonFooter, IonGrid, IonIcon, IonLabel, IonRouterOutlet, IonRow, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
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

/* Theme variables */
import './theme/variables.css';
import Add from './pages/add/Add';
import Detail from './pages/detail/Detail';
import { Provider } from 'react-redux'
import { store } from './store'
import AddDetail from './pages/detail/addDetail/addDetail';
import GraphDetails from './pages/detail/GraphDetails/GraphDetails';
import { calendar, personCircle, playCircle } from 'ionicons/icons';
import Settings from './pages/settings/Settings';

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store} >
    <IonApp>
      <IonContent>

        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/add" render={() => <Add />} />
            <Route exact path="/settings" render={() => <Settings />} />
            <Route exact path="/detail/:id/add" render={() => <AddDetail />} />
            <Route exact path="/detail/:id" render={() => <Detail />} />
            <Route exact path="/detail/:id/graph" render={() => <GraphDetails />} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
      <IonFooter>
          <IonRow>
            <IonCol style={{ textAlign: 'center' }} className="circle">
              lala
            </IonCol>
            <IonCol style={{ textAlign: 'center' }} className="circle2">
              Lolo
            </IonCol>
          </IonRow>
          <div className='btn'>
            
          </div>
      </IonFooter>
    </IonApp>
  </Provider>
);

export default App;
