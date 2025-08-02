
const path = require('path');

module.exports = path.dirname(require.main.filename); 

// ab koi bhi iss path ko import kar skta hai aur isko root directory maan kar apna path iske baad laga skta hai 