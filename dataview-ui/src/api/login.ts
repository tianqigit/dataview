import request from '@/utils/request'

export   function login() {
    return request({
        url: 'dataview/api/auth/login',
        method: 'post'
     
    })
}