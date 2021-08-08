/// <reference types="cypress" />

describe('User melakukan proses login pada SIAKAD Polinema', () => {

  // NIM dan Password Benar 
  it('User memasukkan username berupa NIM dan password yang terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710190')
    cy.get('#password').type('yahyahudan1920')
    cy.get('.btn-success').click()
  })

  // NIM dan Password salah 
  it('User memasukkan username berupa NIM dan password yang tidak terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('183183183')
    cy.get('#password').type('ashiap')
    cy.get('.btn-success').click()
    cy.contains('Username / Password Salah')
  })
  // NIM terisi dan Password tidak terisi 
  it('User memasukkan nim dan tidak mengisi password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710190')
    cy.get('.btn-success').click()
  })
  // NIM tidak terisi dan Password terisi 
  it('User memasukkan password dan tidak mengisi nim', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#password').type('yahyahudan1920')
    cy.get('.btn-success').click()
  })
  // Pengecekan Lupa Password
  it('User mengklik tombol lupa password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    
    cy.contains('Lupa Password?').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', 'https://helpakademik.polinema.ac.id/ajukan-pertanyaan')

  })

})