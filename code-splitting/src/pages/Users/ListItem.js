/* This one is NOT using code splitting */
import { useState } from 'react';
import sortBy from 'lodash/sortBy'
import data from "./data.json";

const ListItem = () => {
  const [personList, setPersonList] = useState(data.persons);

  const handleSortByName = () => {
    const sortedPersonList = sortBy(personList, ['id'])
    setPersonList(sortedPersonList)
  }

  return (
    <div>
      <ol>
        {personList.map((val) => {
          const personDetail = `name: ${val.name}, age: ${val.age}`;
          return <li key={val.name}>{personDetail}</li>;
        })}
      </ol>
      <button onClick={handleSortByName}>Sort by name</button>
    </div>
  );
};

/* This one is using code splitting */
// import { useState } from 'react';
// import data from "./data.json";

// const ListItem = () => {
//   const [personList, setPersonList] = useState(data.persons);

//   const handleSortByName = async () => {
//     const sortBy = (await import('lodash/sortBy')).default
//     const sortedPersonList = sortBy(personList, ['id'])
//     setPersonList(sortedPersonList)
//   }

//   return (
//     <div>
//       <ol>
//         {personList.map((val) => {
//           const personDetail = `name: ${val.name}, age: ${val.age}`;
//           return <li key={val.name}>{personDetail}</li>;
//         })}
//       </ol>
//       <button onClick={handleSortByName}>Sort by name</button>
//     </div>
//   );
// };

export default ListItem;
