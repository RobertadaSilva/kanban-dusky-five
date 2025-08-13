describe('Persistência de dados', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })
it('TC25 - Persistência após recarregar página', () => {
  
  const nomeDaColuna = 'Persistência de dados'
  cy.newColumn(nomeDaColuna)
  cy.reload()

  cy.contains(nomeDaColuna).should('be.visible')
  })
})
