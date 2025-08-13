describe('Gerenciamento de Colunas', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('TC01 - Criar nova coluna com sucesso', () => {
    cy.contains('Adicionar outra lista').click()
    cy.get('.sc-gsnTZi').type('Nova coluna')
    cy.get('.btn').click()
    cy.contains('Nova coluna').should('be.visible')
  })

  it('TC02 - Criar coluna com nome muito longo (>50 chars)', () => {
    const nomeDaColuna = 'Nome longo '.repeat(60) // repete o titulo 60 vezes
    cy.newColumn(nomeDaColuna)
    
    cy.contains(nomeDaColuna.substring(0, 20)).should('be.visible') // validando os primeiros 20 caracteres
  })

  it('TC03 - Criar nova coluna com nome vazio', () => {
    cy.contains('Adicionar outra lista').click()
    cy.get('.sc-gsnTZi').clear()
    cy.get('.btn').click()
    cy.contains('Adicionar outra lista').should('be.visible')
  })

  it('TC06 - Remover coluna com sucesso', () => {
    const nomeDaColuna = 'Removendo coluna'
    cy.newColumn(nomeDaColuna)
    cy.get('[id="' + nomeDaColuna + 'trash"]').click() //removendo usando o id dinamico, como tem espaço, precisei fazer dessa forma
    cy.contains(nomeDaColuna).should('not.exist')
})
})
