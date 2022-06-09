import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

function Logo() {
<<<<<<< HEAD

    let officeNum = 4;
=======
    const[locNum, setLocNum] = useState("");
    useEffect(() => {
        fetchData('http://localhost/FinalProject_phpCourse/repports/NumOfLoc.php', (err, data) => {
            if (err) return console.log(err);
            setLocNum(data);
        });
    }, [])
>>>>>>> c7177196d57c4349cc6fc367c9bdae56a2cfa68f
    return(
        <>
            <section class="logo-section">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="Location" class="logo" />
                    <h3> <span>{locNum}</span> Locations</h3>
                    <p>Prime location for business to base an office</p>
                </div>

                <div>
                    <img src="https://img.icons8.com/ios/500/room.png" alt="Office" class="logo" />
                    <h3> <span>{officeNum}</span> Offices</h3>
                    <p>Flexible spaces that meet your needs</p>
                </div>

                <div>
                    <img src="https://icon-library.com/images/calendar-icon-png/calendar-icon-png-2.jpg" alt="Booking" class="logo" />
                    <h3>Booking</h3>
                    <p>Book by the hour or day, or settle into an office for as long as you want</p>
                </div>

                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png" alt="Work" class="logo" />
                    <h3>Work Anywhere</h3>
                    <p>Do your best work anywhere</p>
                </div>
            </section>
        </>
    )
}
export default Logo;
