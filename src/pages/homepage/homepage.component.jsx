import React from "react";
import Directory from "../../components/directory/directory.component";

//functional component,
//no lifecycle methods, no state
const HomePage = ({history})=>(
<div className='homepage'>
    <Directory history={history}></Directory>
</div>
)
export default HomePage;