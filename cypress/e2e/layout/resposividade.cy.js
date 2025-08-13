describe('Responsividade e Layout - Testar adição de colunas e verificar se botão tema fica visível', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

it('TC24 - Layout responsivo para celulares', () => {
  cy.viewport(375, 667)

  const nomeDaColuna = 'Responsivo Celular'
  cy.newColumn(nomeDaColuna)
  cy.get('.react-switch-bg').should('be.visible')
})

it('TC24 - Layout responsivo para tablets', () => {
  cy.viewport(768, 1024)

  const nomeDaColuna = 'Responsivo Tablet'
  cy.newColumn(nomeDaColuna)
  cy.get('.react-switch-bg').should('be.visible')
})
})
