import { Link } from "react-router-dom"
import { HomeStyle } from "../css/HomeStyle"
import GlobalStyle from "../css/GlobalStyle"

import WomanRunning from '../assets/woman-running.png'
import NewCollection from '../assets/new-collection.png'
import MenCollection from '../assets/men-collection.png'
import WomanCollection from '../assets/woman-collection.png'

import Sobre from './Sobre'
import Contato from './Contato'
import Produtos from './Produtos'

const Home = () => {
    return(
        <>
            
            <HomeStyle>
                <div className='main-text'>
                    <h1>SPORTWEAR</h1>
                </div>
                <div className="txt-and-img-container">
                    <img src={WomanRunning} className="img-woman"></img>
                    <div className="txt-and-button-container">
                        <h3>Men's & Woman</h3>
                        <p>Online store selling high-quality sportwear</p>
                        <div className="buttons">
                            <button>Buy Now</button>
                            <button className="secondary">Watch Video</button>
                            <i class="bi bi-play-circle-fill"></i>
                        </div>
                        <div className='description-container'>
                            <p className="description-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore ullam dolore aspernatur consequuntur iusto quae iure deserunt rem sed ipsam, mollitia quos culpa molestias dolorum.</p>
                            <img alt="new-collection" src={NewCollection}></img>
                        </div>
                        <div className="scroll-btn">
                            <Link to='/' className="link">
                                <i class="bi bi-arrow-down-circle-fill"></i>
                                <p>Scroll Down</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="collections">
                    <div className="collection" id="men-collection">
                        <img src={MenCollection} alt="Homem com fone" />
                        <div className="text-collections">
                            <p>Men's <br/> Collection</p>
                            <button>Open Store</button>
                        </div>
                    </div>

                    <div className="collection" id="woman-collection">
                        <div className="text-collections">
                            <p>Woman <br/> Collection</p>
                            <button>Open Store</button>
                        </div>
                        <img src={WomanCollection} alt="Mulher olhando pra trás" />
                    </div>
                </div>
                
            </HomeStyle>
            <Produtos/>
            <Sobre/>
            <Contato/>
        </>
    )
}

export default Home
