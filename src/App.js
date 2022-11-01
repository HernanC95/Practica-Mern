import logo from './logo.svg';
import './App.css';
import NombreFoto from './components/NombreFoto';
import CampoConArray from './components/CampoConArray';
import Flechita from './components/Flechita';

function App() {
let numero = 0
let next = ()=>{
  numero++
}
  return (
        <div className='card black'>
          <NombreFoto/>
          <p className='gray flex j-center a-center'>ocultar info</p>
          <div className='edad-fecha'>
            <p className='datos white r25 edad'>Edad: 32 años</p>
            <p className='datos white l25 fecha'>Fecha: 9/7/1990</p>
          </div>
          <div className='datos white flex a-center'>
            <p>Mail: ignacioborraz@hotmail.com</p>
          </div>
          <CampoConArray titulo='' datos=''/>
          <CampoConArray titulo='' datos=''/>
          <div className='flex j-center a-center'>
            <Flechita verbo={'anterior'} estilo="r25"/>
            <Flechita verbo={'siguiente'} estilo="l25"/>
          </div>
        </div>
      )
    }

export default App;
