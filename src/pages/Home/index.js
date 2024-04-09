
import { Header } from '../../components/Header/index';
import { Banner } from '../../components/Banner';
import { Buttons } from '../../components/Button/index';
import { CardCircle } from '../../components/CardCicle/index';

export function Home(){
  return(
    <>
      <Header/>
      <Banner/>
      <Buttons/>
      <CardCircle/>         
    </>
  );
}
