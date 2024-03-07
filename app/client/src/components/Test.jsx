import React from 'react'

const Test = () => {
  return (
    <div>
      
        <form >
        <h1>testing</h1>
        <label>Name</label><br/>
          <input type="text" name="name" required/><br/>
          <label>Email</label><br/>
          <input type="email" name="email" required/><br/>
          <label>Passwored</label><br/>
          <input type="password" name="password" required/><br/>
          <label>ConfirmPasswored</label><br/>
          <input type="password" name="ConfirmPassword" required/><br/>
          <input type="submit" value="Regiter"/><br/>
        </form>
    </div>
  )
}

export default Test