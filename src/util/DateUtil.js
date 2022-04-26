const {format} = require('date-fns');

export const formatDate = (date) => format(date, 'dd/MM/yyyy');