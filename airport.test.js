const Airport = require('./airport')

describe('Airport', () => {
    const testAirport = new Airport('Charles de Gaulle', 'CDG')

    test('airports have a country', (done) => {
            //run getInfo method
            testAirport.getInfo((err, info) => {
            //log this airport info to console
            console.log(info)
            //expect error to be null
            expect(err).toBeNull()
            //expect the airport country to be FR
            expect(info.country).toEqual('FR')
            //end asynchrounous test
            done()
        })
    })

    test('airports have a state', (done) => {
            //run getInfo method
            testAirport.getInfo((err, info) => {
            //log this airport info to console
            console.log(info)
            //expect error to be null
            expect(err).toBeNull()
            //expect the state to be Ile-de-France
            expect(info.state).toEqual('Ile-de-France')
            //end asynchrounous test
            done()
    })  
})  
})