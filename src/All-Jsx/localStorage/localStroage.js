import Swal from "sweetalert2";


const getCartIds = () => {
    const localStorageIds = localStorage.getItem('cartIDs');

    if(!localStorageIds) {
        return [];
    }

    return JSON.parse(localStorageIds);
}

const setCartId = (id) => {
    const previousId = getCartIds();

    if(!previousId) {
        previousId.push(id);
        localStorage.setItem('cartIDs', JSON.stringify(previousId));
        Swal.fire(
            'Product added cart successfully!',
            'You clicked the button!',
            'success'
        )
        return;
    }

    const isExist = previousId.find(item => item === id);

    if (isExist) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Your product is already added to cart.",
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return;
    }

    previousId.push(id);
    localStorage.setItem('cartIDs', JSON.stringify(previousId));
    Swal.fire(
        'Product added cart successfully!',
        'You clicked the button!',
        'success'
    )
}

const removeItem = (id) => {
    const cartAllIds = getCartIds();

    const removeItems = cartAllIds.filter(item => id !== item);

    localStorage.setItem('cartIDs', JSON.stringify(removeItems));
    Swal.fire(
        'Product removed successfully!',
        'You clicked the button!',
        'success'
    )
}

const removeAllItems = () => {
    localStorage.removeItem("cartIDs");
}

export {getCartIds, setCartId, removeItem, removeAllItems};
