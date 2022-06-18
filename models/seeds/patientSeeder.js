const db = require('../../config/mongoose')
const Patient = require('../patient')

const patiensName = ['Jack', 'Tom', 'Sam', 'Jhon', 'Amy']

db.once('open', async() => {
    for(let i = 0; i<patiensName.length; i++) {
      const user = await Patient.findOne({ name: patiensName[i] })
      if(user) continue

      await Patient.create({ name: patiensName[i] })
    }
    console.log('seed completed')
})
