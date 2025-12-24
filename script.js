function orderWhatsApp(productName, price) {
    let phoneNumber = "917822884694"; // apna WhatsApp number yaha daale

    let message =
        `Hello MK Handmade Jewellery 👋%0A%0A` +
        `I want to order:%0A` +
        `📿 Product: ${productName}%0A` +
        `💰 Price: ₹${price}%0A%0A` +
        `Please confirm availability & delivery.`;

    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
}
