import Card from "./Card";
import info from './assets/info.json'

function App() {
  return (
    <>
      <h1 className="main">Employee Description card</h1>
      {/* <Card info={{ name: info[0].name, role: info[0].role, age: info[0].age, desc: info[0].desc, profile: info[0].profile}} />
      <Card info={{ name: info[4].name, role: info[4].role, age: info[4].age, desc: info[4].desc, profile: info[4].profile}} />
      <Card info={{ name: info[1].name, role: info[1].role, age: info[1].age, desc: info[1].desc, profile: info[1].profile}} />
      <Card info={{ name: info[3].name, role: info[3].role, age: info[3].age, desc: info[3].desc, profile: info[3].profile}} />
      <Card info={{ name: info[2].name, role: info[2].role, age: info[2].age, desc: info[2].desc, profile: info[2].profile}} />
      <Card info={{ name: info[5].name, role: info[5].role, age: info[5].age, desc: info[5].desc, profile: info[5].profile}} />
      <Card info={{ name: info[6].name, role: info[6].role, age: info[6].age, desc: info[6].desc, profile: info[6].profile}} />
      <Card info={{ name: info[7].name, role: info[7].role, age: info[7].age, desc: info[7].desc, profile: info[7].profile}} /> */}


      {info.map((value,index)=> 
        (
        <Card 
          key={index}
          info={{name:value.name,
            role:value.role,
            age:value.age,
            desc:value.desc,
            profile:value.profile
          }}
        />
      ))}
    </>
  );
}

export default App;
