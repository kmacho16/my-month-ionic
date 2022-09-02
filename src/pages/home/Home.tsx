import { IonContent, IonFab, IonFabButton, IonFabList,  IonIcon, IonPage  } from '@ionic/react';
import ListResume from '../../components/ListResume/ListResume';
import './Home.css';
import { add,  share} from 'ionicons/icons';
import { useState } from 'react';
import ResumeItem from '../../interface/resumeItem.interface';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

  const [items, setItems] = useState<ResumeItem[]>([
    {month:'Agosto',balance:2000000,expenses:150000},
    {month:'Septiembre',balance:2500000,expenses:250000}
  ]);

  const redirectAdd = () =>{
    history.push('/add');
  }

  return (
    <IonPage>
        <ListResume  items={items} />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          
          <IonFabList side="top">
            <IonFabButton onClick={()=>{
              redirectAdd();
            }}><IonIcon icon={add} /></IonFabButton>
          </IonFabList>
        </IonFab>
    </IonPage>
  );
};

export default Home;
