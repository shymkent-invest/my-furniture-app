// 2. Логика калькулятора
const range = document.getElementById('lengthRange');
const material = document.getElementById('material');

if(range) {
    range.addEventListener('input', updatePrice);
    material.addEventListener('change', updatePrice);
}

function updatePrice() {
    const len = document.getElementById('lengthRange').value;
    const mat = document.getElementById('material').value;
    document.getElementById('lengthVal').innerText = len;
    
    const basePrice = 75000; // Базовая цена за метр
    const total = Math.round(len * basePrice * mat);
    const monthly = Math.round(total / 12);
    
    document.getElementById('totalPrice').innerText = total.toLocaleString() + " ₸";
    document.getElementById('monthlyPrice').innerText = monthly.toLocaleString() + " ₸";
}

// 4. Логика До/После
let isAfter = false;
function toggleCompare() {
    const img = document.getElementById('compareImg');
    if(!isAfter) {
        img.src = "https://images.unsplash.com/photo-1556911223-e452028e363d?w=400"; // Фото ПОСЛЕ
        isAfter = true;
    } else {
        img.src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400"; // Фото ДО
        isAfter = false;
    }
}

// 5. SEO и Аналитика (Заглушка для GitHub)
console.log("SEO Meta Tags: Loaded. Analytics: Waiting for connection...");
