const Home = () => {

    const handleclick = () => {console.log('it worked');}
    const handleclickAgain = (name) => {console.log('it worked '+name);}

    return (  
        <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleclick}>Button one</button>
      <button onClick={() => { handleclickAgain('mario') }}>Button one</button>
    </div>
    );
}
 
export default Home;