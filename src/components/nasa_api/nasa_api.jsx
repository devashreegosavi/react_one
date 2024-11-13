import { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

export function NasaApi(){

    const [marsObj, setMarsObj] = useState({})
    function LoadData(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39;")
        .then(response => {
            setMarsObj(response.data);
            console.log(response.data);
        })
    }
    useEffect(() => {
        LoadData();
    },[])

    return(
        <div className="container-fluid">
             <h3>Mars Rover Photos</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Preview</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObj.photos.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.camera.full_name}</td>
                                <td>
                                    <a href={item.img_src} target="_blank"><img src={item.img_src} width="100" height="100" /></a>
                                </td>
                                <td>
                                    {item.rover.name}
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}