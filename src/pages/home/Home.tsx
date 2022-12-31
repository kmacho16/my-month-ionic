import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import ListResume from '../../components/ListResume/ListResume';
import { add, share } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ResumeItem from '../../interface/resumeItem.interface';
import { useHistory } from 'react-router';
import Title from '../../components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { callGetAll } from '../../state/resumes.slice';
import { RootState } from '../../store';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState)=> state.resumes.resumes)

  const [items, setItems] = useState<ResumeItem[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(()=>{
    dispatch(callGetAll())
  },[]);

  const update = (event: CustomEvent<RefresherEventDetail>) =>{
    dispatch(callGetAll());
    setTimeout(()=>{
      event.detail.complete();
    },2000)
  }
  
  useEffect(()=>{
    setItems(resumes);
    setLoaded(true);
  },[resumes])

  const redirectAdd = () => {
    history.push('/add');
  }

  return (
    <IonPage>
      <IonContent>
        <IonRefresher slot='fixed' onIonRefresh={update}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
          <Title title='Resumenes mensuales'/>
          {loaded && (<ListResume items={items} />)}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={() => {
              redirectAdd();
            }}><IonIcon icon={add} /></IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
