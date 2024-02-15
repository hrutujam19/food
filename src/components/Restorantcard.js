 import data from "../utils/config"
const Restorantcard =({url, name})=>{
    // console.log("props",props);
    
    return(
        <div className="custom-card">
            <div>
                <img src={url}
                alt="resimg"
                width="100%"
                 style={{height:"150px",
                objectFit: "cover"}}/>
                
            </div>
        <p>{name}</p>
        {/* <div className="d-flex justify-content-between">
        <p>{data[0].rating}/10</p>
        <p>{data[0].deliverytime}min</p>
        </div>
        <p>{data[0].cuisines}</p>
        <p>{data[0].location}</p> */}
        </div>
    );
}
export default Restorantcard ;