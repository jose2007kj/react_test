const token = 'C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx'  //put you key here

const endpoint = {
    login : "https://api.quikdr.com/authentication"
}

export const userLogin = async (user) => {
    
    const response = await fetch(endpoint.login,{
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json',
	    'api-header-security': token
        },
        body : JSON.stringify({
            email : user.email,
	    "strategy": "local",
            password : user.password,
        })
    })

    if(!response.ok) throw new Error('Something Went Wrong!!');
    
    const responseData = await response.json()
    localStorage.setItem('tranzmeo_token', responseData.accessToken);
    return responseData.accessToken
}
