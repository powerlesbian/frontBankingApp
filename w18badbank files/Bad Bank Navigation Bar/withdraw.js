function Withdraw(){
    const ctx = React.useContext(UserContext);
    return (
      <h1>Withdraw here<br/>
      {JSON.stringify(ctx)}
      </h1>
    )
  }