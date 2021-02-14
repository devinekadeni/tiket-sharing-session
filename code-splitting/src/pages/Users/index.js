/* This one is NOT using code splitting */
import { useState } from "react";
import ListItem from "./ListItem";

const Users = () => {
  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <h1>Users Page</h1>
      <button onClick={() => setShowItem(!showItem)}>{showItem ? 'Hide' : 'Show'} Item</button>
      {showItem && (
        <div>
          <ListItem />
        </div>
      )}
    </div>
  );
};

/* This one is using code splitting */
// import { useState, lazy, Suspense } from "react";
// const ListItem = lazy(() => import("./ListItem"));

// const Users = () => {
//   const [showItem, setShowItem] = useState(false);

//   return (
//     <div>
//       <h1>Users Page</h1>
//       <button onClick={() => setShowItem(!showItem)}>{showItem ? 'Hide' : 'Show'} Item</button>
//       <Suspense fallback={<div>Loading...</div>}>
//         {showItem && (
//           <div>
//             <ListItem />
//           </div>
//         )}
//       </Suspense>
//     </div>
//   );
// };

export default Users;
