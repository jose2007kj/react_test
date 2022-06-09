const token = "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx"  //put you key here
const bearer = localStorage.getItem('tranzmeo_token')
const endpoint = {
    slot : `https://api.quikdr.com/schedules?doctorsId=364&organisationsId=140&&date[$gte]=2022-05-10
&date[$lte]=2022-05-30&$skip=0&$limit=500&$sort[date]=1&$sort[time]=1`
}

export const timeSlot = async () => {
    
    const response = await fetch(endpoint.slot,{
        method : 'GET',
        headers : { 
            'Content-Type' : 'application/json',
	    'api-header-security': token,
	    "Authorization": `Bearer ${bearer}`
        }
    })

    if(!response.ok) throw new Error('Something Went Wrong!!');
    
    const responseData = await response.json()
    return responseData
}
