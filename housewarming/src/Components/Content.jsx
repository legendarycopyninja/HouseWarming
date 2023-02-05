export default function Content(){
    return (
       <main className="content">
        <h2 className="date">On 23rd Feburary 2023</h2>
        <h3 className="pooja">Pooja Details</h3>
        <ul>
            <li>
                Gruhapravesham Pooja : 4:30 - 6:30 am
            </li>
            <li>
             Sathyanarayana Pooja  :  6:30 - 8:00 am
            </li>
        </ul>
        <h3>Venue</h3>
        <p>No:96,100 Gomathi Amman nagar. Perangavur</p>
        <h4 ><a className="maplocation" href="https://www.google.com/maps/@/data=!4m3!11m2!2sDEFdhTOz0PxGWti0O8PI2GMmHxxGcQ!3e3?utm_source=mstt_0&g_ep=CAESCTExLjYwLjcwMxgAILffASoAQgJJTg%3D%3D" target="_blank" rel="noopener noreferrer">Click for Google Map Location</a></h4>
        <h3>Landmarks</h3>
        <ul>
            <li>28min From Padi flyover</li>
            <li>24min from Madhavaram Routana </li>
            <li>18min From RedHills Bus Terminus</li>
        </ul>
        <h2 className="endmsg">Hoping to meet you all on our auspicious day!</h2>
       </main>
    )
}