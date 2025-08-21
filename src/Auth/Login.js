import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <main class="form-signin">
<div className='container card'>
    <form>
    <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating" bis_skin_checked="1">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating" bis_skin_checked="1">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3" bis_skin_checked="1">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</div>

</main>
  )
}

export default Login