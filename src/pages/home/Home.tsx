import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage } from '@ionic/react';
import ListResume from '../../components/ListResume/ListResume';
import styles from './Home.module.css';
import { add, share } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ResumeItem from '../../interface/resumeItem.interface';
import { useHistory } from 'react-router';
import Title from '../../components/Title/Title';
import { getAll } from '../../services/resumes.service';
import { useDispatch, useSelector } from 'react-redux';
import { callGetAll, setResumes } from '../../state/resumes.slice';
import { RootState } from '../../store';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState)=> state.resumes.resumes)

  const [items, setItems] = useState<ResumeItem[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(()=>{
    console.log("oooos")
    dispatch(callGetAll())
  },[]);
  
  useEffect(()=>{
    console.log("resumes", resumes);
    setItems(resumes);
    setLoaded(true);
  },[resumes])

  const redirectAdd = () => {
    history.push('/add');
  }

  return (
    <IonPage>
      <IonContent>
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
