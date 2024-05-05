const moment = require('moment');
require('moment/locale/es');

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('DD-MM-YYYY')
};

module.exports = { dateHelpers };
