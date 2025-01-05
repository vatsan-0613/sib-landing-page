let productSlide = 0
let testSlide = 0

function slideForward() {
    const forwardBtn = document.getElementById("forward-btn") 
    forwardBtn.innerHTML = '<img src="/assets/right-arrow-dark.png" alt=""></img>'
    const backwardBtn = document.getElementById("backward-btn") 
    backwardBtn.innerHTML = '<img src="/assets/left-arrow-light.png" alt=""></img>'

    const productCarousel = document.getElementById("product-carousel");
    const products = productCarousel.children.length; // Number of products
    const productWidth = 397; // Width of each product (matches CSS)

    // Increment forward and reset if it exceeds total products
    productSlide = (productSlide + 1) % products;

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${productSlide * productWidth}px)`;
}

function slideBackward(){
    const forwardBtn = document.getElementById("forward-btn") 
    forwardBtn.innerHTML = '<img src="/assets/right-arrow-light.png" alt=""></img>'
    const backwardBtn = document.getElementById("backward-btn") 
    backwardBtn.innerHTML = '<img src="/assets/left-arrow-dark.png" alt=""></img>'

    const productCarousel = document.getElementById("product-carousel");
    const products = productCarousel.children.length; // Number of products
    const productWidth = 397; // Width of each product (matches CSS)

    // Increment forward and reset if it exceeds total products
    productSlide = (productSlide - 1)

    if(productSlide<0){
        productSlide = 0
        return
    }

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${slide * productWidth}px)`;
}

function slideTestimonialForward() {
    const forwardBtn = document.getElementById("forward-test-btn") 
    forwardBtn.innerHTML = '<img src="/assets/right-arrow-dark.png" alt=""></img>'
    const backwardBtn = document.getElementById("backward-test-btn") 
    backwardBtn.innerHTML = '<img src="/assets/left-arrow-light.png" alt=""></img>'

    const productCarousel = document.getElementById("test-carousel");
    const products = productCarousel.children.length; // Number of products
    const productWidth = 397; // Width of each product (matches CSS)

    // Increment forward and reset if it exceeds total products
    testSlide = (testSlide + 1) % products;

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${testSlide * productWidth}px)`;
}

function slideTestimonialBackward(){
    const forwardBtn = document.getElementById("forward-test-btn") 
    forwardBtn.innerHTML = '<img src="/assets/right-arrow-light.png" alt=""></img>'
    const backwardBtn = document.getElementById("backward-test-btn") 
    backwardBtn.innerHTML = '<img src="/assets/left-arrow-dark.png" alt=""></img>'

    const productCarousel = document.getElementById("test-carousel");
    const products = productCarousel.children.length; // Number of products
    const productWidth = 397; // Width of each product (matches CSS)

    // Increment forward and reset if it exceeds total products
    testSlide = (testSlide - 1)

    if(testSlide<0){
        testSlide = 0
        return
    }

    // Apply translateX based on the current slide index
    productCarousel.style.transform = `translateX(-${testSlide * productWidth}px)`;
}