import React, {useEffect, useState} from "react";
import axios from "axios";


const App = () => {
  const url = 'http://localhost:8000/api/list';
  const [value, setValue] = useState([]);

  useEffect(() => {
    (async () => {
      try{
        const res = await axios.get(url);
        setValue(res.data.post);
        return;
      }catch(e){
        return e;
      }
    })();
  }, []);

  return (
    <div className="App">
      {value.map((p)=>{
        return(
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.content}</p>
        </div>
        );
      })}
    </div>
  );

  
}





// const App = () => {
//   const url = "http://localhost:8000/api/list";
//   const [value, setValue] = useState([]);

//   // 第二引数を空にすることで最初のレンダリング時のみ実行する
//   // 第二引数は引数に変化があった場合に第一引数が実行される。
//   useEffect(() => {
//     (async () => {
//       try{
//         const res = await axios.get(url);
//         setValue(res.data.post);
//       }catch(e){
//         return e;
//       }
//     })();
//   },[]);

//   return (
//     <div className="App">
//     {value.map((article) => {
//       return (
//         <div key={article.id}>
//           <h1>{article.title}</h1>
//           <p>{article.content}</p>
//         </div>
//       );
//     })}
//     </div>
//   );
// }

export default App;