import { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

export function NasaApiTwo(){

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
             <section>
                 {
                    marsObj.photos.map(item=> 
                        <div className="card p-2 m-2" style={{width: '200px'}} key="{item.id}">
                            <img height="120" src={item.img_src} className="card-img-top"></img>
                            <div className="card-header">
                            <h3>{item.id}</h3>

                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt className="bi bi-camera"> Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt className="bi bi-rocket" >Rover</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <a href={item.img_src}  target="_blank" className="bi bi-eye btn btn-warning w-100"> View </a>
                            </div>

                        </div>
                    )
                 }
             </section>

        </div>
    )
}