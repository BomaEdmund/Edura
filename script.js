
/* ==============================
   EDURA - JAVASCRIPT
================================ */

// CAR DATABASE

const cars = [
    {
        id: 1,
        name: "Mercedes-Benz GLE 450",
        brand: "Mercedes-Benz",
        type: "SUV",
        year: 2024,
        price: 125000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "8,500 km",
        engine: "3.0L V6",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
        description: "A sophisticated luxury SUV combining elegant design, impressive performance and advanced technology."
    },
    {
        id: 2,
        name: "BMW X6 M Sport",
        brand: "BMW",
        type: "SUV",
        year: 2023,
        price: 110000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "12,000 km",
        engine: "3.0L Inline-6",
        tag: "Featured",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
        description: "A bold sports activity coupe with dynamic handling and a powerful road presence."
    },
    {
        id: 3,
        name: "Porsche 911 Carrera",
        brand: "Porsche",
        type: "Sports",
        year: 2024,
        price: 185000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "3,200 km",
        engine: "3.0L Flat-6",
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
        description: "An iconic sports car delivering exhilarating performance and timeless automotive design."
    },
    {
        id: 4,
        name: "Toyota Land Cruiser",
        brand: "Toyota",
        type: "SUV",
        year: 2023,
        price: 145000000,
        fuel: "Diesel",
        transmission: "Automatic",
        mileage: "15,000 km",
        engine: "3.3L V6",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
        description: "A capable and comfortable SUV built for exceptional journeys on different terrains."
    },
    {
        id: 5,
        name: "Lexus RX 350",
        brand: "Lexus",
        type: "SUV",
        year: 2024,
        price: 95000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "6,000 km",
        engine: "2.4L Turbo",
        tag: "Featured",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
        description: "A refined luxury SUV with a comfortable interior and sophisticated styling."
    },
    {
        id: 6,
        name: "Range Rover Sport",
        brand: "Range Rover",
        type: "SUV",
        year: 2023,
        price: 165000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "10,000 km",
        engine: "3.0L V6",
        tag: "Luxury",
        image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&w=1000&q=85",
        description: "An elegant performance SUV combining contemporary luxury and impressive capability."
    },
    {
        id: 7,
        name: "Mercedes-Benz C300",
        brand: "Mercedes-Benz",
        type: "Sedan",
        year: 2022,
        price: 72000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "18,000 km",
        engine: "2.0L Turbo",
        tag: "Featured",
        image: "https://images.unsplash.com/photo-1618843479618-39c2e3bcb3e9?auto=format&fit=crop&w=1000&q=85",
        description: "A stylish executive sedan offering comfort, technology and everyday performance."
    },
    {
        id: 8,
        name: "BMW 5 Series",
        brand: "BMW",
        type: "Sedan",
        year: 2024,
        price: 98000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "5,500 km",
        engine: "2.0L Turbo",
        tag: "New Arrival",
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1000&q=85",
        description: "A premium executive vehicle that balances performance, comfort and innovation."
    },
    {
        id: 9,
        name: "Toyota Camry",
        brand: "Toyota",
        type: "Sedan",
        year: 2023,
        price: 48000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "14,000 km",
        engine: "2.5L 4-Cylinder",
        tag: "Great Value",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85",
        description: "A dependable and comfortable sedan designed for smooth everyday driving."
    }
];

// ELEMENTS

const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyMessage = document.getElementById("emptyMessage");

const carModal = document.getElementById("carModal");
const modalDetails = document.getElementById("modalDetails");

const bookingModal = document.getElementById("bookingModal");

// SAVED FAVOURITES

let favourites = [];

try {
    const saved = JSON.parse(localStorage.getItem("eduraFavourites"));
    favourites = Array.isArray(saved) ? saved.filter(
        id => cars.some(car => car.id === id)
    ) : [];
} catch {
    favourites = [];
}

let toastTimer;

// FORMAT PRICE

function formatPrice(price) {
    return "₦" + price.toLocaleString("en-NG");
}

// SHOW NOTIFICATION

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// UPDATE FAVOURITE COUNT

function updateFavouriteCount() {
    document.getElementById("wishlistCount").textContent =
        favourites.length;
}

// SAVE FAVOURITES

function saveFavourites() {
    localStorage.setItem(
        "eduraFavourites",
        JSON.stringify(favourites)
    );

    updateFavouriteCount();
}

// DISPLAY CARS

function displayCars(list) {
    carGrid.innerHTML = "";

    resultsCount.textContent =
        `Showing ${list.length} vehicle${list.length !== 1 ? "s" : ""}`;

    emptyMessage.hidden = list.length !== 0;

    list.forEach(car => {
        const isFavourite = favourites.includes(car.id);

        const card = document.createElement("article");
        card.className = "car-card";

        card.innerHTML = `
            <div class="car-image">
                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >

                <span class="car-tag">${car.tag}</span>

                <button
                    class="favourite-btn ${isFavourite ? "active" : ""}"
                    data-favourite="${car.id}"
                    aria-label="Toggle ${car.name} favourite"
                    aria-pressed="${isFavourite}"
                >
                    ${isFavourite ? "♥" : "♡"}
                </button>
            </div>

            <div class="car-details">
                <p class="car-brand">${car.brand}</p>

                <h3>${car.name}</h3>

                <div class="car-specs">
                    <span>📅 ${car.year}</span>
                    <span>⚙ ${car.transmission}</span>
                    <span>⛽ ${car.fuel}</span>
                </div>

                <div class="car-bottom">
                    <div class="car-price">
                        ${formatPrice(car.price)}
                    </div>

                    <button
                        class="view-btn"
                        data-view="${car.id}"
                    >
                        View Details ↗
                    </button>
                </div>
            </div>
        `;

        carGrid.appendChild(card);
    });
}

// SEARCH AND FILTER

function filterCars() {
    const search = searchInput.value.toLowerCase().trim();
    const brand = brandFilter.value;
    const type = typeFilter.value;

    let filtered = cars.filter(car => {
        const matchesSearch =
            car.name.toLowerCase().includes(search) ||
            car.brand.toLowerCase().includes(search) ||
            car.type.toLowerCase().includes(search);

        const matchesBrand =
            brand === "all" || car.brand === brand;

        const matchesType =
            type === "all" || car.type === type;

        return matchesSearch && matchesBrand && matchesType;
    });

    if (sortFilter.value === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sortFilter.value === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sortFilter.value === "year") {
        filtered.sort((a, b) => b.year - a.year);
    }

    displayCars(filtered);
}

// SEARCH EVENTS

searchInput.addEventListener("input", filterCars);
brandFilter.addEventListener("change", filterCars);
typeFilter.addEventListener("change", filterCars);
sortFilter.addEventListener("change", filterCars);

document.getElementById("searchButton")
    .addEventListener("click", filterCars);

// RESET FILTERS

document.getElementById("resetFilters")
    .addEventListener("click", () => {

        searchInput.value = "";
        brandFilter.value = "all";
        typeFilter.value = "all";
        sortFilter.value = "default";

        displayCars(cars);

        showToast("Filters have been reset.");
    });

// TOGGLE FAVOURITES

function toggleFavourite(id) {
    if (favourites.includes(id)) {
        favourites = favourites.filter(item => item !== id);
        showToast("Removed from your wishlist.");
    } else {
        favourites.push(id);
        showToast("Added to your wishlist!");
    }

    saveFavourites();
    filterCars();
}

// SHOW FAVOURITES

let showingFavourites = false;

document.getElementById("wishlistButton")
    .addEventListener("click", () => {

        showingFavourites = !showingFavourites;

        if (showingFavourites) {
            const savedCars = cars.filter(
                car => favourites.includes(car.id)
            );

            displayCars(savedCars);

            document.getElementById("inventory")
                .scrollIntoView({ behavior: "smooth" });

            showToast("Showing your saved cars.");
        } else {
            filterCars();
            showToast("Showing all vehicles.");
        }
    });

// OPEN CAR DETAILS

function openCarDetails(id) {
    const car = cars.find(item => item.id === id);

    if (!car) return;

    modalDetails.innerHTML = `
        <img
            src="${car.image}"
            alt="${car.name}"
            class="modal-car-image"
        >

        <p class="eyebrow">${car.brand} | ${car.tag}</p>

        <h2 id="modalTitle">${car.name}</h2>

        <h3>${formatPrice(car.price)}</h3>

        <p>${car.description}</p>

        <div class="modal-specs">
            <div>
                <strong>Year</strong>
                ${car.year}
            </div>

            <div>
                <strong>Category</strong>
                ${car.type}
            </div>

            <div>
                <strong>Engine</strong>
                ${car.engine}
            </div>

            <div>
                <strong>Fuel</strong>
                ${car.fuel}
            </div>

            <div>
                <strong>Transmission</strong>
                ${car.transmission}
            </div>

            <div>
                <strong>Mileage</strong>
                ${car.mileage}
            </div>
        </div>

        <button class="primary-btn" id="modalBookingButton">
            Book a Test Drive ↗
        </button>
    `;

    carModal.hidden = false;
    document.body.style.overflow = "hidden";

    document.getElementById("modalBookingButton")
        .addEventListener("click", () => {
            closeModal(carModal);
            openBooking(id);
        });
}

// MODAL EVENTS

function closeModal(modal) {
    modal.hidden = true;

    if (carModal.hidden && bookingModal.hidden) {
        document.body.style.overflow = "";
    }
}

document.getElementById("closeCarModal")
    .addEventListener("click", () => closeModal(carModal));

document.getElementById("closeBookingModal")
    .addEventListener("click", () => closeModal(bookingModal));

[carModal, bookingModal].forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal(carModal);
        closeModal(bookingModal);
    }
});

// OPEN BOOKING FORM

function openBooking(id) {
    const car = cars.find(item => item.id === id);

    if (!car) return;

    document.getElementById("bookingCarId").value = car.id;

    document.getElementById("bookingCarName").textContent =
        `Vehicle: ${car.name}`;

    document.getElementById("bookingFeedback").textContent = "";

    bookingModal.hidden = false;
    document.body.style.overflow = "hidden";
}

// BOOKING DATE - PREVENT PAST DATES

const bookingDate = document.getElementById("bookingDate");

const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localToday;

// SUBMIT BOOKING

document.getElementById("bookingForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("bookingName").value.trim();
        const email = document.getElementById("bookingEmail").value.trim();
        const phone = document.getElementById("bookingPhone").value.trim();
        const date = bookingDate.value;

        if (!name || !email || !phone || !date) {
            return;
        }

        const feedback = document.getElementById("bookingFeedback");

        if (date < localToday) {
            feedback.textContent = "Please select a future date.";
            return;
        }

        const booking = {
            id: Date.now(),
            customer: name,
            email: email,
            phone: phone,
            carId: Number(document.getElementById("bookingCarId").value),
            date: date,
            submittedAt: new Date().toISOString()
        };

        // Save locally for demonstration purposes.
        let bookings = [];

        try {
            bookings = JSON.parse(
                localStorage.getItem("eduraBookings")
            ) || [];
        } catch {
            bookings = [];
        }

        bookings.push(booking);

        localStorage.setItem(
            "eduraBookings",
            JSON.stringify(bookings)
        );

        feedback.textContent =
            "Your test-drive request has been saved successfully!";

        event.target.reset();
        bookingDate.min = localToday;

        showToast("Test-drive request saved!");

    });

// CONTACT FORM

document.getElementById("contactForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) return;

        const enquiry = {
            name,
            email,
            message,
            date: new Date().toISOString()
        };

        let enquiries = [];

        try {
            enquiries = JSON.parse(
                localStorage.getItem("eduraEnquiries")
            ) || [];
        } catch {
            enquiries = [];
        }

        enquiries.push(enquiry);

        localStorage.setItem(
            "eduraEnquiries",
            JSON.stringify(enquiries)
        );

        document.getElementById("contactFeedback").textContent =
            "Your enquiry has been saved successfully!";

        event.target.reset();

        showToast("Enquiry saved successfully!");
    });

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// FOOTER YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// INITIALIZE WEBSITE

updateFavouriteCount();
displayCars(cars);
