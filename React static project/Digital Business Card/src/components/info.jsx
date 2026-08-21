import Engineer from "./Enginner.jpg";
export default function info() {
    return (
        <>
            <div className="container-header">
                <img src={Engineer} />    
                <h1>Maaz qureshi</h1>
                <h4>Fronted Developer</h4>
                <h5>Maaz.website</h5>
                <div className="btn-container">
                    <button>Email</button>
                    <button>Linkedin</button>
                </div>
            </div>
        
        </>
    )
}