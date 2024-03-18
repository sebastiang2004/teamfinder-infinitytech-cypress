describe('Global Tests', () => {
  // Test for the main page
  it('Main page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/')
 //stay on the home page for button function
    cy.wait(2000)
       //scroll up and down
       cy.scrollTo('bottom')
       cy.wait(2000)
       cy.scrollTo('top')
       cy.wait(2000)
  
  })

  it('Clicks on buttons on home page', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/') // replace with the URL of your home page

    cy.contains('Home').click()
    cy.wait(2000)
    cy.contains('Characteristics').click()
    cy.wait(2000)
    cy.contains('benefits').click()
    cy.wait(2000)
    cy.contains('Feature').click()
    cy.wait(2000)
  })

  // Test for the login page
  it('Login page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/login') 
    //fill all forms
    cy.get('input[name="email"]').type('iulian@gmail.com')
    cy.wait(1000)
    cy.get('input[name="password"]').type('1234')
    cy.wait(1000)
    cy.get('button[type="submit"]').click()
cy.wait(2000)
  })

  // Test for the register page
  it('Register page loads successfully', () => {
    cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/register') 
    //fill all forms
    //fill out name
    cy.get('input[name="name"]').type('Iulian')
    //fill out organizationName
    cy.get('input[name="organizationName"]').type('InfinityTech')
    //fill out address
    cy.get('input[name="address"]').type('1234 InfinityTech Street')
    //fill out email
    cy.get('input[name="email"]').type('cypresstest@cypress.com')
    //fill out password
    cy.get('input[name="password"]').type('1234')
    //fill out confirmPassword
    cy.get('input[name="confirmPassword"]').type('1234')

  })
    // Test for the Dashboard page
    it('Dashboard page loads successfully', () => {
      cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/dashboard')
      // Click the button with id "radix-:r40"
      cy.get('#radix-:r40').click();
      })
    })

