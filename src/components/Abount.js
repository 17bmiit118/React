import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {

    const contextData = useContext(noteContext);

    return (<div>Hii {contextData.state.name}
                <button onClick={contextData.updateState}>Change Context Value</button>
            </div> 
    )
}

export default About;