import React from 'react'
import classes from './App.module.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.topbar}>
          <img src="./images/alibaba.png" alt="logo" />
        </nav>
        
      </header>
      <div className={classes.whole}>
        <div className={classes.left}>
          <img src="./images/black.png" alt="blackwatch" />
        </div>
        <div className={classes.right}>
          <h1>Apple Watch Series 8</h1>
          <p>The Apple Watch Series 8 is $399 for Wi-Fi only, and $499 for cellular. Three months of Fitness+ is included. 
            For comparison, the base model starts at the same price as Series 4 through 7.</p>
        <div className={classes.bottom}>
          <h3>Select Color</h3>
          <div className={classes.products}>
            <img src="./images/blue.png" alt="bluewatch" />
            <img src="./images/black.png" alt="blackwatch" />
            <img src="./images/purple.png" alt="purplewatch" />
            <img src="./images/red.png" alt="redwatch" />
          </div>
          <button className={classes.btn}>Buy Now</button>
        </div>
            
          
        </div>
      </div>
      
       
    </div>
  );
}

export default App;
