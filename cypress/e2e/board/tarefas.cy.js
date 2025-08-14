describe('Gerenciamento de Tarefas', () => {
  const novaColuna = 'Nova coluna'
  const novaTask = 'Nova tarefa'

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app')
    cy.newColumn(novaColuna)

  })

  it('TC07 - Adicionar tarefa na coluna existente', () => {
    cy.newTask(novaTask, novaColuna)
})

//   it('TC08 - Criar nova tarefa com nome vazio', () => {
//     cy.newTask('', novaColuna)
// })

  it('TC09 - Remover tarefa da coluna existente', () => {
    cy.newTask(novaTask, novaColuna)

    cy.contains(novaTask).get('svg.trash').last().click({ force: true })   
    cy.contains(novaTask).should('not.exist')
  })
})
