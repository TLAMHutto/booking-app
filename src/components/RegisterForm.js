const RegisterForm = ({handleSubmit, name, setName, email, setEmail, password, setPassword}) => (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="form-label">Name</label>
      <input type='text' className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input type='email' className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type='password' className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button className='btn btn-primary'>Submit</button>
  </form>
)
export default RegisterForm;