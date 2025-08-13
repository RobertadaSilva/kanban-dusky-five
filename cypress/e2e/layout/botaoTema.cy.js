describe('Botão de Tema Claro/Escuro', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('TC19 - Alternar tema claro/escuro', () => {
    cy.get('.react-switch-bg').click()
    cy.get('.react-switch-bg').should('have.css', 'background-color', 'rgb(33, 37, 41)')

    cy.get('.react-switch-bg').click()
    cy.get('.react-switch-bg').should('have.css', 'background-color', 'rgb(25, 93, 142)')
  })
})
