 import Restorantcard from "./Restorantcard";
 import data from "../utils/config";
 const Cardcontainer =()=>{
    const {imgURL,name}=data[0];
    console.log("data",data[0]);
    return(
        <div className=" container d-flex justify-content-between mt-4">
        <Restorantcard url={data[0].imgURL}/>
        <Restorantcard url={data[0].imgURL}/>
        <Restorantcard url={data[0].imgURL}/>
        <Restorantcard url={data[0].imgURL}/>
        <Restorantcard url={data[0].imgURL}/>
        </div>
    )
}
export default Cardcontainer;