
import Page1 from './component/page1/page1';
import Page2 from './component/page2/page2';
import Page3 from './component/page3/page3';
import Page4 from './component/page4/page4';
import Page5 from './component/page5/page5';
import Page6 from './component/page6/page6';
import Page7 from './component/page7/page7';

import Nav from './component/nav/nav';



import Top from './component/top/top';
function App() {
  return (

    <div>

      <div className='container relative'>
        
       <Top></Top>  
      <Nav/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      </div>
    </div>
  );
}

export default App;
