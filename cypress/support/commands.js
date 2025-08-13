Cypress.Commands.add('newColumn', (columnName) => {
  cy.contains('Adicionar outra lista').click()
  cy.get('.sc-gsnTZi').type(columnName)
  cy.get('.btn').click()
  
  cy.contains(columnName).should('be.visible')
  // retorna o nome da coluna encadeado
  return cy.wrap(columnName)
})


Cypress.Commands.add('newTask', (taskName, columnName) => {
  cy.contains(columnName)
    cy.get('[id="' + columnName + 'CreateTask"]').type(taskName)
    cy.contains('Enviar').click()
 
  if (taskName) {
    cy.contains(taskName).should('be.visible')
  } else {
    cy.contains(taskName).should('not.exist')
  }
  return cy.wrap(taskName)
})