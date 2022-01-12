import './Country.css';

const Country = (props) => {
    return (
        <div className="country">
            <div className="heading">
                <img className="flag" src={props.flags} />
                <div className='name'>
                    <h3 className="name">{props.name}</h3>
                    <p className="region">                    
                        {props.subRegion}, {props.region}                    
                    </p>
                </div>
            </div>
            <div className="info">                            
                <p><span className="head">Capital</span> : {props.capital}</p>
                <p><span className="head">Population</span> : {props.population}</p>                
                <p><span className="head">Spoken Languages</span> : {props.languages}</p>
                <p><span className="head">Borders</span> : {props.borders}</p>
            </div>
            <p style={{height:1, visibility:'hidden'}}>h</p>
        </div>
    )
}

export default Country;