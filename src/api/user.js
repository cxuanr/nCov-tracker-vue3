import service from "../utils/axios"

export function userRegister(data) {
    return service.request({
        method: 'post',
        url: '/user/register',
        data
    })
}
