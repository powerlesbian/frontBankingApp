function Deposit(){
    const ctx = React.useContext(UserContext);
    return (
      <h1>Deposit here<br/>
      {JSON.stringify(ctx)}
      </h1>
    )
  }