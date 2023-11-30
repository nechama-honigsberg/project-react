import React, { useState } from "react";
import LifeSycle from "./LifeSycle";
function LifeSyclePerson() {

    const [isShowComponent, setIsShowComponent] = useState(true);

    return (
        <>
            <h1>LifeSyclePerson</h1>
            {isShowComponent && <LifeSycle num={5}
                setIsShowComponent={setIsShowComponent} />}

        </>
    )


}

// export default LifeSyclePerson;

// import React, { useState } from "react";
// import LifeSycle from "./LifeSycle";
// import UseEffect from "./UseEffect";
// export default function LifeSycleParent() {

//     const [isShowComponent, setIsShowComponent] = useState(true);

//     return (
//         <>
//             {/* <h2>LifeSycleParent</h2>
//             {isShowComponent && <LifeSycle num={5} setIsShowComponent = {setIsShowComponent}></LifeSycle>} */}

//             <h1>UseEffect</h1>
//             {/* {isShowComponent && <UseEffect num={5} setIsShowComponent = {setIsShowComponent}></UseEffect>} */}
//             <UseEffect></UseEffect>
//         </>
//     )
// }