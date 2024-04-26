
module.exports = {
    button: {

        btnAccept: '.moove-gdpr-infobar-allow-all',
        btnGPL: '.elementor-element-2ef4cb4 > .elementor-widget-wrap'

    },

    homePage() {

        cy.visit("https://zitrus.com.br/")
        cy.contains('Aceitar').should('be.visible')
        cy.get(this.button.btnAccept).click()

    },

    ourSolucoe() {

        cy.contains('Nossas Soluções').should('be.visible').scrollIntoView()
        cy.contains('Gestão de Planos de Saúde').should('be.visible')
        cy.contains('Atendimento').should('be.visible')
        cy.contains('Ressarcimento ao SUS').should('be.visible')
        cy.contains('Portal da Empresa e do Beneficiário').should('be.visible')
        cy.contains('Gestão do Relacionamento').should('be.visible')
        cy.contains('B.I (Business Intelligence)').should('be.visible')

    },

    buttonHealthPlanmanagement() {

        cy.contains('Gestão de Planos de Saúde').should('be.visible')
        cy.get(this.button.btnGPL).click()

    }

}
