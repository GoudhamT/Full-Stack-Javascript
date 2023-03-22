/*In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'*/

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    if (shoppingCart.indexOf("Meat") == -1 )
    {
        shoppingCart.unshift("Meat")
    }
    console.log(shoppingCart)
    if (shoppingCart.indexOf("Sugar") == -1 )
    {
        shoppingCart.push("Sugar")
    }
    console.log("sugar is added",shoppingCart)
    shoppingCart.splice(shoppingCart.indexOf("Honey"),1)
    console.log("honey is removed",shoppingCart)

    function updateTea(j,cart)
    {
        for (let i=0;i<j;i++ )
        {
            if (cart[i] == 'Tea')
            {
                cart[i] = "Green Tea"
            }
        }
    }
    updateTea(shoppingCart.length,shoppingCart)
    console.log("Tea item is updated to green tea",shoppingCart)
    