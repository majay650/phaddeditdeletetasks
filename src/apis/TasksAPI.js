import axios from 'axios'


export default axios.create({
    baseURL: 'https://todo1.proofhub.com/api/v3/',
    headers:{
        'Content-Type' :'application/json',
        'X-API-KEY': '94330dcb5e3562c96a824ea53d1e7a6e11dc598b',
        'Ref-Key': 'phd65893GJHGJHG738twd72YUyt63'
        }
})