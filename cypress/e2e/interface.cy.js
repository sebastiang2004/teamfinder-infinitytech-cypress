describe('Global Tests', () => {
    // ... existing tests ...
  
    describe('Interface Tests', () => {
      it('should retrieve the value from the input field', () => {
        // Set up
        cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
        cy.wait(1000);
        cy.contains('Add a member').click();
        cy.wait(1000);
        
        // Exercise
        cy.get('input[type="text"]').then(($input) => {
          const url = $input.val();
          expect(url).to.equal('https://example.com');
        });
      });
  
      // Test case 1: Verify that the URL input value is set correctly
      it('should set the URL input value correctly', () => {
        // Set up
        cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
        cy.wait(1000);
        cy.contains('Add a member').click();
        cy.wait(1000);
        
        // Exercise
        cy.get('input[type="text"]').then(($input) => {
          const url = $input.val();
          expect(url).to.equal('https://example.com');
        });
      });
  
      // Test case 2: Verify that the URL input value is empty when no value is set
      it('should have an empty URL input value when no value is set', () => {
        // Set up
        cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
        cy.wait(1000);
        cy.contains('Add a member').click();
        cy.wait(1000);
        
        // Exercise
        cy.get('input[type="text"]').then(($input) => {
          const url = $input.val();
          expect(url).to.equal('');
        });
      });
  
      // Test case 3: Verify that the URL input value is not null or undefined
      it('should have a non-null and non-undefined URL input value', () => {
        // Set up
        cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
        cy.wait(1000);
        cy.contains('Add a member').click();
        cy.wait(1000);
        
        // Exercise
        cy.get('input[type="text"]').then(($input) => {
          const url = $input.val();
          expect(url).not.toBeNull();
          expect(url).not.toBeUndefined();
        });
      });
  
      // Test case 4: Verify that the URL input value is a valid URL
      it('should have a valid URL input value', () => {
        // Set up
        cy.visit('https://teamfinder-infinitytech-yz1j.vercel.app/members');
        cy.wait(1000);
        cy.contains('Add a member').click();
        cy.wait(1000);
        
        // Exercise
        cy.get('input[type="text"]').then(($input) => {
          const url = $input.val();
          expect(url).to.match(/^(http|https):\/\/[^ "]+$/);
        });
      });
    });
  });