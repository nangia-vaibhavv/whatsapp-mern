import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat"

function App() {
  return (
    <div className="app">
   { /*<h1>lets build whatsapp mern applications</h1>*/}

   <div className="app_body">
   
{/*sidebar */}
<Sidebar />
{/*chat compineents */}
<Chat />
   </div>
    </div>
  );
}

export default App;
