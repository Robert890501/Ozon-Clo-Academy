const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');

    const cartOpen = () => {
        cartModal.style.display = 'flex';
    };

    const cartClose = () => {
        cartModal.style.display = '';
    };

    cartBtn.addEventListener('click', cartOpen);

    cartCloseBtn.addEventListener('click', cartClose);

    /* console.log(cartModal);
    console.dir(cartBtn); */
};

export default cart;
