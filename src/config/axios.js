//Instead of using the axios directly, i'll be using the configure axios directly

import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://dct-application-form.herokuapp.com'
}) 

export default axios