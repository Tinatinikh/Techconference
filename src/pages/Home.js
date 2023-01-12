import Pages from "./Pages";
import background from './img/Global.png';
import backgroundpic from './img/event.png'

export function Home () {
    return (
        <Pages>
        <div className="pageonepart" style={{ backgroundImage: `url(${background})` }}>
           <div className="text">
               <h1>
                Largest Tech Conference in Caucasus
                </h1>
                <h3>
                TBILISI, GEORGIA
                SEPT. 5-7, 2025
                </h3>
            </div>
            <div className="buttons">
                <button className="bt1">
                    Register Now
                </button>
                <button className="bt2">
                    Learn More
                </button>
            </div>
            
        </div>
        
        <div className="pagesecendpart" style={{backgroundImage: `url(${backgroundpic})` }}>

            <h1 className="h1part2">
                About the event
            </h1>

            <p className="ppart2">
            Those who seek to not just ‘do data’ incrementally better, but different, for the leaders who want to help their companies become truly data-driven, for the analyst in all of us that seeks simpler & faster ways to get important insights. Most importantly, it’s for the data engineers & architects that bear the burden of making all the data things happen – faster, better, and cheaper.
            </p>

        </div>

        <div className="pagethird">

                <li>Email Adress</li>
                <li>Mailing Adress</li>
                <li>Phne Number</li>
                <li> <button> Register Now</button> </li>
              
        </div>
        </Pages>
    )
}