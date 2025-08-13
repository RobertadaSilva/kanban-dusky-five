describe('Gerenciamento de Tags', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  })

  it('TC15 - Criar tag com cor', () => {
    const tagName = 'Importante'
    cy.newColumn('Nova coluna')
    cy.newTask('Nova tarefa', 'Nova coluna')

    cy.contains('Nova tarefa').click()
    cy.contains('Adicionar nova Tag').type(tagName)
    cy.contains('Enviar').click()
    cy.contains(tagName).should('be.visible')
  })
})
