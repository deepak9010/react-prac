import React from 'react';

const Contact = () => {

    let name = "";
  return (
    <div>
       <form>
        <input type="text" placeholder='Name'
        onChange={(e) => (name = e.target.value)} />
        <input type="email" placeholder='Email' />
       </form>
       <button onClick ={() => console.log(name)}>Press</button>
       <p>{name}</p>
    </div>
  )
}

export default Contact;
