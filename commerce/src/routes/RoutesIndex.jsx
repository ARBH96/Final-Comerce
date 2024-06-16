


const RoutesIndex = () => {
    const {isAuth} = useAuthContext()
    return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={isAuth ? <Dashboard />: <Login/> } />
          <Route path='/login' element={<Login/>} />
          <Route path='/secret' element={isAuth ? <Secret />: <Login/> } />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    )
  }
  
  export default RoutesIndex