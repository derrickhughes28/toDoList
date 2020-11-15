import React from 'react'
 
const People = ({people}) => {
//   const peopleList = people.map(person => {
//     if (person.age > 20){
//       return (
//         <div className="person" key={person.id}>
//           <div>Name: { person.name }</div>
//           <div>Age: { person.age }</div>
//           <div>Belt: { person.belt }</div>
//         </div>
//       )
//     } else {
//       return null
//     }
//   });
    const peopleList = people.map(person => {
        return person.age > 21 ? (
            <div className="person" key={person.id}>
            <div>Name: {person.name}</div>
            <div>Age: {person.ge}</div>
            <div>favColor: {person.favColor}</div>
            </div>
        ) : null
 })
  return (
    <div className="person-list">
	 { peopleList }
    </div>
  );
 
}
 
export default People