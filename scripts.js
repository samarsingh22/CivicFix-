let mainMap, smallMap;
let issues = JSON.parse(localStorage.getItem("issues")) || [];
let selectedLocation = null;

// Scroll smooth
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Initialize Google Maps
function initMap() {
    // Main map
    mainMap = new google.maps.Map(document.getElementById("mainMap"), {
        center: { lat: 20.5937, lng: 78.9629 }, // India center
        zoom: 5
    });

    // Small map for selecting location
    smallMap = new google.maps.Map(document.getElementById("smallMap"), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5
    });

    // Click on small map to select location
    smallMap.addListener("click", (e) => {
        selectedLocation = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        document.getElementById("locationField").value = `${selectedLocation.lat}, ${selectedLocation.lng}`;
        new google.maps.Marker({ position: selectedLocation, map: smallMap });
    });

    // Load existing issues
    renderIssues();
}

// Handle form submission
document.getElementById("issueForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value;
    const category = this.category.value;
    const description = this.description.value;
    const location = selectedLocation || { lat: 0, lng: 0 };

    if (!selectedLocation) {
        alert("Please select a location on the map");
        return;
    }

    const newIssue = { name, category, description, location };
    issues.push(newIssue);
    localStorage.setItem("issues", JSON.stringify(issues));

    this.reset();
    document.getElementById("locationField").value = "";
    selectedLocation = null;

    renderIssues();
});

// Render issues on map and list
function renderIssues() {
    // Clear map
    mainMap.setCenter({ lat: 20.5937, lng: 78.9629 });
    mainMap.setZoom(5);

    // Add markers
    issues.forEach(issue => {
        new google.maps.Marker({
            position: issue.location,
            map: mainMap,
            title: `${issue.category} - ${issue.name}`
        });
    });

    // Update list
    const list = document.getElementById("issueList");
    list.innerHTML = "";
    issues.forEach(issue => {
        const li = document.createElement("li");
        li.textContent = `${issue.category} - ${issue.description} (${issue.location.lat}, ${issue.location.lng})`;
        list.appendChild(li);
    });
}
