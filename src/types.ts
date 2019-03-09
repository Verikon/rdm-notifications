export interface INotification {
    _id?: number
    title?: string
    message: string
    messageType: string
    dispatch?: any
    clickExpire?: boolean
    top?: number
    height?: number
    offset?: number
}