import React, {useState, useEffect} from "react";
import './PhotoPage.css';
import axios from "axios";
import Picture from "./Picture.js";
import Header from "./Header.js";
import Text from "./Text.js";

function PhotoPage (){
    const [data, setData] = useState([]);
    useEffect (()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=fCt7eItkQRi87zwlKaDMB4dbkGPFThTGm9MTtgXB')
        .then (res=>{
            setData(res.data);
            console.log(res);
        })
        .catch (err=>{console.log(err)});
    }, []);
  
    return(
        <div>
            <Header />
            <Picture date={data.date} image={data.hdurl} copy={data.copyright} title={data.title}/>
            <Text text={data.explanation}/>
        </div>
    )
}

export default PhotoPage;