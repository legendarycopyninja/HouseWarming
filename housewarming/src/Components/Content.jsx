export default function Content(){
    return (
       <div className="content">
            <header className="headContainer">
                <h1 className="headtitle">We Cordially Invite Everyone to our</h1>
                <img src="slogan.png" alt="house welcome" className="headimg" />
                <h2 className="headtitletwo">HouseWarming Ceremony</h2>
                <h2 className="headdate">On 23rd Feburary 2023</h2>
            </header>
            {/* Main Content */}
            <main className="maincontent">
                <p className="address">No:96,100 Gomathi Amman nagar , Perangavur</p>
                <div className="mapContainer">
                    <a  href="https://www.google.com/maps/@/data=!4m3!11m2!2sDEFdhTOz0PxGWti0O8PI2GMmHxxGcQ!3e3?utm_source=mstt_0&g_ep=CAESCTExLjYwLjcwMxgAILffASoAQgJJTg%3D%3D" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-location-dot"></i>
                    </a>
                </div>
                <h3 className="timertitle">Timings</h3>
                    <p className="timercontent">
                        Gruhapravesham Pooja : 4:30 - 6:30 am
                    </p>
                    <p className="timercontent">
                        Sathyanarayana Pooja  :  6:30 - 8:00 am
                    </p>
                <h2 className="endmsg">Hoping to meet you all soon on our auspicious day!</h2>
            </main>
       </div>
    )
}