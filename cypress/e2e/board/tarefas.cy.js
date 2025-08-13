describe('Gerenciamento de Tarefas', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app')
  })

  it('TC07 - Adicionar tarefa na coluna existente', () => {
    cy.newColumn('Nova coluna')
    cy.newTask('Nova tarefa', 'Nova coluna')
})

  it('TC08 - Criar nova tarefa com nome vazio', () => {
    cy.newColumn('Nova coluna')
    cy.newTask('', 'Nova coluna')

    })
})

  it('TC09 - Remover tarefa da coluna existente', () => {
    cy.newColumn('Nova coluna')
    cy.newTask('Nova tarefa', 'Nova coluna')

   
    cy.contains('Nova tarefa').parent().within(() => {
    cy.get('.trash').click()
  })
    cy.contains('Nova tarefa').should('not.exist')
  })
