import React, { useEffect, useState } from 'react';
const imgurl = "https://api.thecatapi.com/v1/images/search";






function FetchData() {

    // using usestate to update the sate 

    const [mainData, setMaindata] = useState([]);

    // using getdata function to fetch data from api


    const getData = async () => {

        const res = await fetch(imgurl);
        // using json to convert object 
        const data = await res.json();

        // addind data to updated function
        setMaindata(data);

    }

    //calling getdata fuction in useeffect hook to stop multiple request

    useEffect(() => {

        getData();
    }, []);
}


    return (
        <>

            {

                mainData.map((cval) => {
                    
                        <>  <div>

                            {/* displaying images using li tag 10 times */}
                            {/* <button onClick= {changeimage()}>  click me to change the image </button>  */}

                            <li> <h1>{cval.id}</h1>
                                <img src={cval.url} height={cval.height} width={cval.width} />
                            </li>

                        </div>

                        </>
                    
                });
            }

        </>
        );

export default FetchData;


// fetch('')
// .then(res => res.json())
// .then((data) =>{
    // data.map
// })
// [{"id":"rPTbM2Tvt","url":"https://cdn2.thecatapi.com/images/rPTbM2Tvt.png","width":1100,"height":739}]
// [{"id":"-Dlk77pTx","url":"https://cdn2.thecatapi.com/images/-Dlk77pTx.jpg","width":2829,"height":2534}