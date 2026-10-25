
import Designer from "../assets/img/Designer club blue.png"
import fogg from "../assets/img/fogg.png"
import villian from "../assets/img/Villian.png"


function Products(){
  return(
    <div class="products">
      <div class ="box">
        <img src={Designer} alt='no img'></img>
        <p>
          The <b>Designer Club Eau de Parfum</b> features a premium deep-blue bottle with a sleek finish.
          Its matching navy-blue box and bold silver lettering create a sophisticated, modern look.
        </p>
      </div>

      <div class ="box">
        <img src={villian} alt='villian img'></img>
        <p>
          The <b>VILLAIN Eau de Parfum</b> features a luxurious amber-brown bottle with a bold geometric design.
          Its matching dark-brown box and elegant gold lettering create a premium.
        </p>
      </div>

      <div class ="box">
         <img src={fogg} alt="FOGG perfume" />
        <p>
          The <b>FOGG Eau de Parfum</b> features a stylish black-and-brown bottle with a bold, modern design.
          Its matching premium box and bold FOGG lettering create a sleek, sophisticated appearance.
        </p>
      </div>
    </div>
  )
}

export default Products