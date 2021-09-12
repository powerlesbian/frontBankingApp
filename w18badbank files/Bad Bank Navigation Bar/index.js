function Spa() {
  return (
      <HashRouter>


      <h1>Welcome to Bad Bank</h1>
      <NavBar/>
      <UserContext.Provider value={{ users:[{name:'gigi',email:'divagg@gmail.com',password:'blabla',balance:10000}]}}>
      <Route path="/" exact component={Home}/>
      <Route path="/CreateAccount/" component={CreateAccount}/>
      <Route path="/login/" component={Login}/>
      <Route path="/deposit/" component={Deposit}/>
      <Route path="/withdraw/" component={Withdraw}/>
      <Route path="/balance/" component={Balance}/>
      <Route path="/alldata/" component={AllData}/>
      </UserContext.Provider>
      </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
