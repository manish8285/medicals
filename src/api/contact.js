import { myAxios } from "./myapi";

export const sendContactForm=async(contactPayload)=>{
    return await myAxios.post('contact',contactPayload).then(({data})=>data)
}
