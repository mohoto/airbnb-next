import {format} from 'date-fns'

export const dateFormatted = value => {
    return format(new Date(value), "dd/MM/yy");
}