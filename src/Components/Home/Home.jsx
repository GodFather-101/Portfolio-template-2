import './css/Home.css';
import Model from './Model';

function Home(props) {
  return (
    <div className="Main">
      <div className='Main-Content'>
        <div className="Head">
          <h1 className='h1'>HELLO,</h1><h3>EveryBody</h3>
        </div><br />
        <div className="content">
          <h1 className='h1'>I AM,</h1><h3>SOWNDHAR RAJAN T</h3>
        </div>
      </div>
      <div className="ModelContainer">
        <h5>FULL STACK DEVELOPER</h5>
        <div className='Model'><Model /></div>
      </div>
    </div>


  )
}

export default Home;