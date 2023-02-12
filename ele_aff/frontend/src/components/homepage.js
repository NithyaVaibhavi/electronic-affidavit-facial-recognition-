import React from 'react'
import "./homepage.css"
import axios from 'axios'
import { useState ,useEffect} from 'react'
const Homepage=({setLoginUser})=>{

    const [selectedFile, setSelectedFile] = useState()
    const [detected, setDetected] = useState()
    const [processing1, setProcessing1] = useState(false)
    const [processing2, setProcessing2] = useState(false)
    const [preview, setPreview] = useState()
    const [semantic, setSemantic] = useState()
    const [toolslist, setTools] = useState()




    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setDetected();
        setSemantic();
        console.log("yo" + e.target.files)
        setSelectedFile(e.target.files[0])
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        console.log(selectedFile);
        const objectUrl = URL.createObjectURL(selectedFile)
        console.log(objectUrl);
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])



    async function detect() {
        console.log(selectedFile)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        let formData = new FormData();
        formData.append(
            "file",
            selectedFile
        )

        axios.post('http://localhost:8000/object-to-img', formData, config)
            .then(res => {
                setProcessing1(true);
                setTools(res.data.result);
                var encode_image = JSON.parse(res.data.img.body)['image'];
                var image = new Image();
                image.src = 'data:image/png;base64,' + encode_image;
                console.log(typeof image)
                setDetected('data:image/png;base64,' + encode_image);
                setProcessing1(false)
            })
            .catch(err => console.log(err));      
    }

    return (
        
        <div >
            <header>
                <center><h1 style={{fontSize:'3rem'}}>Homepage</h1></center>
            </header>
            <div className='homepage'>
                <div>
                    <input type='file' onChange={onSelectFile} /> 
                    {selectedFile && <img src={preview} style={{ maxWidth: "300px", maxHeight: "300px" }} />}<br /> <br />
                </div>
                <div className='detect'>
                    <button onClick={detect}>Detect</button>
                </div>
            </div>
            {processing1 && processing2 ? (<h1>processing.......</h1>) :
                (<div className='detecting'>
                    {detected && <h1 style={{ paddingLeft: "50px" }}>Image:</h1>}
                    <div>
                        {detected && <img src={detected} style={{ maxWidth: "500px", maxHeight: "500px",marginLeft:"120px" }} />}
                    </div>
                    <div className='imageDetected'>
                        {detected && <h2>Detected Person:</h2>}
                        {detected &&
                            <ul>{toolslist.length > 0 && toolslist.map((item) => <li key={item}> <h3>{item}</h3> </li>)}</ul>
                        }
                    </div>
                    {semantic && <h1 style={{ paddingLeft: "150px" }}>Segmented Image:</h1>}<br />
                    <div>
                        {semantic && <img src={semantic} style={{ maxWidth: "800px", maxHeight: "600px" }} />}
                    </div>
                    
                </div>)}

            









            <footer>
                <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
            </footer>
        </div>

    );
}
 
export default Homepage;