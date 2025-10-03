// Section Switching
    function showSection(id) {
      document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
      document.getElementById(id).classList.add("active");
    }

    // Dark/Light Mode
    function toggleTheme() { document.body.classList.toggle("dark"); }

    // Hamburger Menu
    function toggleMenu() { document.getElementById("mobileMenu").classList.toggle("show"); }

    // To-Do App
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        taskList.innerHTML += `
          <li>${task} 
            <button onclick="deleteTask(${index})">❌</button>
          </li>`;
      });
    }
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      if(taskInput.value.trim() !== ""){
        tasks.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
      }
    }
    function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    }
    renderTasks();

    // Products
    let products = [
  { name: "Laptop", category: "electronics", price: 800, rating: 4.5, image: "Hp Victus 15 .jpg" },
  { name: "Shirt", category: "clothes", price: 30, rating: 4.0, image: "Modern Style 1.jpg"},
  { name: "Phone", category: "electronics", price: 500, rating: 4.7, image: "Samsung Galaxy S24.jpg"  },
];

// Display products dynamically
function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:12px; margin-bottom:10px;">
        <h4>${p.name}</h4>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ⭐${p.rating}</p>
      </div>`;
  });
}

// Filter products
function filterProducts() {
  let filterValue = document.getElementById("filter").value;
  let filtered = (filterValue === "all") ? products : products.filter(p => p.category === filterValue);
  displayProducts(filtered);
}

// Sort products
function sortProducts() {
  let sortValue = document.getElementById("sort").value;
  let sorted = [...products];
  if (sortValue === "low-high") sorted.sort((a,b)=>a.price-b.price);
  else if (sortValue === "high-low") sorted.sort((a,b)=>b.price-a.price);
  displayProducts(sorted);
}

// Initial display
displayProducts(products);
