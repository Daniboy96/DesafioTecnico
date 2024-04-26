
module.exports = {

    button: {      
        
        btnOperational: '#jet-toggle-control-2541',
        btnSapia: '#jet-toggle-control-2542',
        btnPayment: '#jet-toggle-control-2543',
        btnBilling: '#jet-toggle-control-2544',
        btnANS: '#jet-toggle-control-2545',
        btnCommissions: '#jet-toggle-control-2546',
        btnIntegrations: '#jet-toggle-control-2547',
        btnAccounting: '#jet-toggle-control-2548',
        btnProvider: '#jet-toggle-control-2549'

    },

    healthPlanManagement() {

        cy.contains('Gestão de Planos').should('be.visible')
        cy.contains('Demais módulos do sistema de Gestão de Planos.').should('be.visible')

        cy.get(this.button.btnOperational).click()
        cy.get(this.button.btnSapia).click()
        cy.get(this.button.btnPayment).click()
        cy.get(this.button.btnBilling).click()
        cy.get(this.button.btnANS).click()
        cy.get(this.button.btnCommissions).click()
        cy.get(this.button.btnIntegrations).click()
        cy.get(this.button.btnAccounting).click()
        cy.get(this.button.btnProvider).click()

        // Recolher as seções
        cy.get(this.button.btnProvider).click()
        cy.get(this.button.btnAccounting).click()
        cy.get(this.button.btnIntegrations).click()
        cy.get(this.button.btnCommissions).click()
        cy.get(this.button.btnANS).click()
        cy.get(this.button.btnBilling).click()
        cy.get(this.button.btnPayment).click()
        cy.get(this.button.btnSapia).click()
        cy.get(this.button.btnOperational).click()

    }

}