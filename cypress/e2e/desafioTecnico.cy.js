
import elementos from "../Page/elementos"

describe('Pagina Inicial', () => {

  beforeEach(() => {

    cy.visit("https://zitrus.com.br/")
    cy.contains('Aceitar').should('be.visible')
    cy.get(elementos.button.btnAceitar ).click()
    
  })

  it('Nossas Soluções', () => {
    cy.contains('Nossas Soluções').should('be.visible').scrollIntoView()
    cy.contains('Gestão de Planos de Saúde').should('be.visible')
    cy.contains('Atendimento').should('be.visible')
    cy.contains('Ressarcimento ao SUS').should('be.visible')
    cy.contains('Portal da Empresa e do Beneficiário').should('be.visible')
    cy.contains('Gestão do Relacionamento').should('be.visible')
    cy.contains('B.I (Business Intelligence)').should('be.visible')
  })

  it('Gestão de Planos de Saúde', () => {
    cy.get(elementos.button.btnGPL).click()
    cy.contains('Gestão de Planos').should('be.visible')
    cy.contains('Demais módulos do sistema de Gestão de Planos.').should('be.visible')

    cy.get(elementos.button.btnOperacional).click()
    cy.get(elementos.button.btnSapia).click()
    cy.get(elementos.button.btnPagamento).click()
    cy.get(elementos.button.btnFaturamento).click()
    cy.get(elementos.button.btnANS).click()
    cy.get(elementos.button.btnComissoes).click()
    cy.get(elementos.button.btnIntegracoes).click()
    cy.get(elementos.button.btnContabilizacao).click()
    cy.get(elementos.button.btnPrestadora).click()

    // Recolhendo as seções
    cy.get(elementos.button.btnPrestadora).click()
    cy.get(elementos.button.btnContabilizacao).click()
    cy.get(elementos.button.btnIntegracoes).click()
    cy.get(elementos.button.btnComissoes).click()
    cy.get(elementos.button.btnANS).click()
    cy.get(elementos.button.btnFaturamento).click()
    cy.get(elementos.button.btnPagamento).click()
    cy.get(elementos.button.btnSapia).click()
    cy.get(elementos.button.btnOperacional).click()

  })
})