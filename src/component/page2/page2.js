import "./page2.css";
import im from '../../assets/MAHINDRA1.jpg'
import imm from '../../assets/mahindra2.jpg'
function Page2() {
  return (
    <div className ="page2">
      <div className="middle ">
        <div className="middle-link1">MAHINDRA</div>
      </div>
      <div className="container">
        <div className="cant">
        <div className="txt">
        <img src={im} alt="im" className="cara"/>
          <div className="name">XUV</div>
          <div className="prise">price: 10L </div>
        </div>
        <div className="txt">
        <img src={imm} alt="imm" className="carb"/>
          <div className="name">XUV</div>
          <div className="prise">price: 15L</div>
        </div>
        </div>
        
      </div>
      <div className="footer flex space-x-10">
        <div className="footer1">Custom Order</div>
        <div className="footer2">Demo Drive</div>
      </div>
    </div>
  );
}

export default Page2;