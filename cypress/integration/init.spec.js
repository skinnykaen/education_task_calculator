
describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('check keypad buttons', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('0')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('2')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('4')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('8')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1 ')
      .contains('%')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('0-1+2*3456789/()%')
  })
  it('check sum', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('15')
  })
  it('check division', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('4')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('1.5')
  })
  it('check minus', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('9')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('-2')
  })
  it('check multiplication', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('2')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('*')
      .click({ force: true })
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('7')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('14')
  })
  it('check remainder', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('8')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('%')
      .click({ force: true })
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('3')
  })
  it('check calculate', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('.')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('6')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('/')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('+')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('*')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('(')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains(')')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('30.25')
  })
  it('clear expression', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('+')
      .click({ force: true })
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('C')
      .click({ force: true })
      .get('.components__Display-sc-5knqiv-0')
      .should('have.value', '')
  })

  it('clear entry', () => {
    cy.get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click({ force: true })
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('1')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('CE')
      .click()
      .get('.components__Display-sc-5knqiv-0')
      .contains('5-')
  })
})

describe('Settigns page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })
  it('check clear all histoty', () => {
    cy.visit('/')
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('5')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('-')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('3')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__KeyButton-sc-wcdxzy-1')
      .contains('=')
      .click()
      .get('.components__HistoryElement-sc-so6uyj-2')
      .should('have.length', 2)
      .visit('/settings')
      .get('.components__ControlPanel-sc-1wex5ej-0')
      .click()
      .visit('/')
      .get('.components__HistoryElement-sc-so6uyj-2')
      .should('have.length', 0)
  })

  it('select theme', () => {
    cy.get('.components__DropDownContainer-sc-1cuvv21-1')
      .click()
      .get('.components__DropDownList-sc-1cuvv21-4')
      .get('.components__ListItem-sc-1cuvv21-5')
      .contains('Dark theme')
      .click()
      .get('.components__Card-sc-1vbczmz-0')
      .should(
        'have.css',
        'background-color',
        'rgb(128, 128, 128)',
      )
  })
})