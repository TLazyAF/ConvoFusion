/*HomePage.tsx*/

import "./HomePage.css";
function HomePage() {
    return (
        <>
            <div className="title-text">
                <h1> ConvoFusion</h1>
            </div>
            <div>

            </div>
            <div className="chat-list-page">
                <div className="chat-list-bar">
                    <div className="search-chat-bar">
                        <div>

                            {/* <div className="form-row"> */}
                            {/* <div className="input-data"> */}
                            {/* <input type="search" required /> */}
                            {/* <div className="underline"></div> */}
                            <label>Search Chats</label>
                            {/* </div> */}
                            {/* </div> */}


                        </div>
                    </div>

                    <div>
                        <div className="userprofile-space">
                            <div className="profile-photo"></div>
                            <div className="username"></div>
                        </div>
                    </div>
                    <div className="sittings-bar">
                        <div></div>
                        <div></div>

                    </div>

                </div>
                <div className="chat-space">

                </div>
            </div>
        </>
    );
}
export default HomePage;
