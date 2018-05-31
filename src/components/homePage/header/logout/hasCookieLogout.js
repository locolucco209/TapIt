import checkCookie from './apiCookieSearchLogout'

const hasCookieCheck = (cookies) => {
  const split = cookies.split(';')
  const allCookies = []
  const cookieNames = []
  let hasCookie 

  return new Promise((resolve, reject) => {

    split.map((item, index) => {
        let name = item.slice(1,11)
        let value = item.slice(12)
        cookieNames.push(name)
        allCookies.push({[name]: value})
    })
    
    switch(cookieNames.includes('tapIt_user')){
        case true:
          let index = cookieNames.indexOf('tapIt_user')
          let cookie = allCookies[index].tapIt_user
            checkCookie(cookie)
            .then((response) =>{
                resolve('user logged out')
            })
            break;
        case false:
              resolve(false)
            break;
        default:
            console.log('Whoops... Something broke..')
    }
    
  })
}

export default hasCookieCheck