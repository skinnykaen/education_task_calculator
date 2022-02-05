
describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('check keypad buttons', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('0')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('2')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('4')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('8')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1 ')
      .contains('%')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('0-1+2*3456789/()%')
  })
  it('check sum', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('15')
  })
  it('check division', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('4')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('1.5')
  })
  it('check minus', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('-2')
  })
  it('check multiplication', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('2')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('*')
      .click({ force: true })
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('14')
  })
  it('check remainder', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('8')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('%')
      .click({ force: true })
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('3')
  })
  it('check calculate', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('.')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('30.25')
  })
  it('clear expression', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('+')
      .click({ force: true })
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('C')
      .click({ force: true })
      .get('.components__Display-sc-17khll6-0')
      .should('have.value', '')
  })

  it('clear entry', () => {
    cy.get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click({ force: true })
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('CE')
      .click()
      .get('.components__Display-sc-17khll6-0')
      .contains('5-')
  })
})

describe('Settigns page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })
  it('check clear all histoty', () => {
    cy.visit('/')
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__KeyButton-sc-mu052l-1')
      .contains('=')
      .click()
      .get('.components__HistoryElement-sc-1ydwq76-2')
      .should('have.length', 2)
      .visit('/settings')
      .get('.components__ControlPanel-sc-z3jwdb-0')
      .click()
      .visit('/')
      .get('.components__HistoryElement-sc-1ydwq76-2')
      .should('have.length', 0)
  })

  it('select theme', () => {
    cy.get('.components__DropDownContainer-sc-mpcgpu-1')
      .click()
      .get('.components__DropDownList-sc-mpcgpu-4')
      .get('.components__ListItem-sc-mpcgpu-5')
      .contains('Dark theme')
      .click()
      .get('.components__Card-sc-spdf8s-0')
      .should(
        'have.css',
        'background-color',
        'rgb(128, 128, 128)',
      )
  })
})