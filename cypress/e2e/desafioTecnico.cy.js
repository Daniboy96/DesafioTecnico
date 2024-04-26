
describe('Pagina Inicial', () => {

  //Issues: https://github.com/Daniboy96/DesafioTecnico/issues/1

  beforeEach(() => {

    Cypress.paginaInicial.homePage()
    
  })

  it('Validar categoria "Nossas Soluções"', () => {
    
    Cypress.paginaInicial.ourSolucoe()
  
  })

  it('Validar redirecionamento do botão "Gestão de Planos de Saúde"', () => {

    Cypress.paginaInicial.ourSolucoe()
    Cypress.paginaInicial.buttonHealthPlanmanagement()    

  })

  it('Validar módulos da categoria "Demais módulos do sistema de Gestão de Planos"',() => {

    Cypress.paginaInicial.ourSolucoe()
    Cypress.paginaInicial.buttonHealthPlanmanagement()
    Cypress.gestaoPlanoSaude.healthPlanManagement()

  })
  
})