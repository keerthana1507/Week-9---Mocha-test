import chai from 'chai';
const {expect, assert} = chai


describe('Array tests', ()=>{
    let names = ["Jackson", "Rob", "Jack", "Wilson", "John"]
    it ('Assert length of an array', ()=>{
        
        expect(names.length).to.equal(5)
    })
        
        it ('Assert name contains Daniel', ()=>{
        assert.isFalse(names.includes('Daniel'))

    })
    it ('Assert filter name of starts with jack', ()=>{
        let filteredNames = names.filter(n => n.startsWith('Jack'))
        expect(filteredNames.length).to.equal(2)


    })
})
