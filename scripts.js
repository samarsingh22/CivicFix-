// CivicConnect JavaScript Application
class CivicConnectApp {
    constructor() {
        this.currentPage = 'home';
        this.currentRole = 'citizen';
        this.mockData = this.initializeMockData();
        this.init();
    }

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.hideLoadingScreen();
        this.loadPage('home');
        this.loadRecentIssues();
    }

    // Mock data initialization
    initializeMockData() {
        return {
            landmarks: [
                {
                    id: 'city-hall',
                    name: 'City Hall',
                    description: 'Built in 1892, this historic government building serves as the administrative center for municipal operations. The neoclassical architecture features beautiful columns and a iconic dome.',
                    category: 'government',
                    address: '123 Main Street',
                    latitude: '40.7589',
                    longitude: '-73.9851',
                    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
                    hours: '8:00 AM - 5:00 PM',
                    phone: '(555) 123-4567',
                    wikipediaUrl: 'https://en.wikipedia.org/wiki/City_hall'
                },
                {
                    id: 'central-park',
                    name: 'Central Park',
                    description: 'A 25-acre urban oasis featuring walking trails, playgrounds, and a beautiful pond. Popular spot for families and outdoor enthusiasts year-round.',
                    category: 'parks',
                    address: '456 Park Avenue',
                    latitude: '40.7580',
                    longitude: '-73.9855',
                    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
                    hours: '6:00 AM - 10:00 PM',
                    wikipediaUrl: 'https://en.wikipedia.org/wiki/Central_Park'
                },
                {
                    id: 'art-museum',
                    name: 'Art Museum',
                    description: 'Contemporary art museum housing over 5,000 works from local and international artists. Features rotating exhibitions and educational programs.',
                    category: 'museums',
                    address: '789 Culture Boulevard',
                    latitude: '40.7570',
                    longitude: '-73.9840',
                    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
                    hours: '10:00 AM - 6:00 PM',
                    wikipediaUrl: 'https://en.wikipedia.org/wiki/Art_museum'
                },
                {
                    id: 'public-library',
                    name: 'Public Library',
                    description: 'Historic Carnegie library built in 1905. Houses over 100,000 books, digital resources, and community meeting spaces. Free WiFi and computer access available.',
                    category: 'historic',
                    address: '321 Knowledge Street',
                    latitude: '40.7595',
                    longitude: '-73.9845',
                    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
                    hours: '9:00 AM - 8:00 PM',
                    wikipediaUrl: 'https://en.wikipedia.org/wiki/Public_library'
                }
            ],
            complaints: [
                {
                    id: 'CR2024-001',
                    title: 'Pothole on Elm Street',
                    description: 'Large pothole causing vehicle damage near intersection of Elm & Oak.',
                    category: 'roads',
                    priority: 'medium',
                    status: 'in_progress',
                    address: 'Elm St & Oak Ave',
                    latitude: '40.7580',
                    longitude: '-73.9851',
                    citizenName: 'John Smith',
                    citizenEmail: 'john.smith@email.com',
                    citizenPhone: '(555) 123-4567',
                    assignedTo: 'Public Works',
                    createdAt: '2024-01-10T10:00:00Z',
                    updatedAt: '2024-01-11T14:30:00Z'
                },
                {
                    id: 'CR2024-002',
                    title: 'Broken Streetlight',
                    description: 'Non-functional streetlight creating safety concerns on Pine Street.',
                    category: 'lighting',
                    priority: 'medium',
                    status: 'resolved',
                    address: 'Pine St & 2nd Ave',
                    latitude: '40.7575',
                    longitude: '-73.9840',
                    citizenName: 'Maria Garcia',
                    citizenEmail: 'maria.garcia@email.com',
                    assignedTo: 'Electrical Department',
                    resolvedAt: '2024-01-08T16:45:00Z',
                    createdAt: '2024-01-03T09:15:00Z',
                    updatedAt: '2024-01-08T16:45:00Z'
                },
                {
                    id: 'CR2024-003',
                    title: 'Overflowing Trash Can',
                    description: 'Public trash receptacle overflowing in Central Park area.',
                    category: 'waste',
                    priority: 'low',
                    status: 'pending',
                    address: 'Central Park, Section B',
                    latitude: '40.7582',
                    longitude: '-73.9855',
                    citizenName: 'Alex Johnson',
                    citizenEmail: 'alex.johnson@email.com',
                    createdAt: '2024-01-08T14:20:00Z',
                    updatedAt: '2024-01-08T14:20:00Z'
                },
                {
                    id: 'CR2024-004',
                    title: 'Broken Traffic Light',
                    description: 'Traffic signal malfunctioning at busy intersection causing safety concerns.',
                    category: 'roads',
                    priority: 'high',
                    status: 'pending',
                    address: 'Main St & 1st Ave',
                    latitude: '40.7590',
                    longitude: '-73.9848',
                    citizenName: 'John Smith',
                    citizenEmail: 'john.smith@email.com',
                    createdAt: '2024-01-12T08:00:00Z',
                    updatedAt: '2024-01-12T08:00:00Z'
                },
                {
                    id: 'CR2024-005',
                    title: 'Water Main Leak',
                    description: 'Water leak on Cedar Street affecting multiple households.',
                    category: 'water',
                    priority: 'medium',
                    status: 'in_progress',
                    address: 'Cedar St #45',
                    latitude: '40.7585',
                    longitude: '-73.9860',
                    citizenName: 'Maria Garcia',
                    citizenEmail: 'maria.garcia@email.com',
                    assignedTo: 'Water Department',
                    createdAt: '2024-01-11T16:30:00Z',
                    updatedAt: '2024-01-12T09:15:00Z'
                }
            ],
            recentResolved: [
                {
                    id: 'CR2024-100',
                    title: 'Pothole on Main Street',
                    description: 'Large pothole causing traffic issues near downtown intersection.',
                    status: 'resolved',
                    address: 'Main St & 5th Ave',
                    resolvedTime: '2 hours ago'
                },
                {
                    id: 'CR2024-101',
                    title: 'Broken Streetlight',
                    description: 'Non-functional streetlight creating safety concerns in residential area.',
                    status: 'resolved',
                    address: 'Oak Street Park',
                    resolvedTime: '1 day ago'
                },
                {
                    id: 'CR2024-102',
                    title: 'Graffiti Removal',
                    description: 'Vandalism on public building facade requiring immediate cleanup.',
                    status: 'resolved',
                    address: 'City Hall Building',
                    resolvedTime: '3 days ago'
                }
            ],
            teams: [
                { name: 'Public Works', activeTasks: 12, performance: 92, icon: 'fas fa-hammer' },
                { name: 'Sanitation', activeTasks: 8, performance: 87, icon: 'fas fa-trash' },
                { name: 'Electrical', activeTasks: 5, performance: 78, icon: 'fas fa-bolt' }
            ],
            activities: [
                { id: 1, description: 'Pothole fixed on Main St', timestamp: '2 hours ago', type: 'resolved' },
                { id: 2, description: 'New complaint assigned to team', timestamp: '4 hours ago', type: 'assigned' },
                { id: 3, description: 'Streetlight repair scheduled', timestamp: '1 day ago', type: 'scheduled' }
            ]
        };
    }

    // Setup event listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.loadPage(page);
            });
        });

        // Role switcher
        document.querySelectorAll('.role-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const role = btn.dataset.role;
                this.switchRole(role);
            });
        });

        // Navigation buttons
        document.querySelectorAll('[data-navigate]').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.navigate;
                this.loadPage(page);
            });
        });

        // Mobile navigation toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        navToggle?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Report form
        this.setupReportForm();

        // Search and filters
        this.setupSearchAndFilters();

        // Landmark interactions
        this.setupLandmarkInteractions();

        // Modal controls
        this.setupModals();

        // Map controls
        this.setupMapControls();
    }

    // Setup report form
    setupReportForm() {
        const reportForm = document.getElementById('report-form');
        if (!reportForm) return;

        // Category selection
        document.querySelectorAll('.category-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.category-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });

        // File upload
        const fileUpload = document.getElementById('file-upload');
        const fileInput = document.getElementById('file-input');
        
        fileUpload?.addEventListener('click', () => fileInput?.click());
        fileUpload?.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUpload.style.borderColor = 'var(--primary-blue)';
        });
        fileUpload?.addEventListener('dragleave', () => {
            fileUpload.style.borderColor = 'var(--gray-300)';
        });
        fileUpload?.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUpload.style.borderColor = 'var(--gray-300)';
            this.handleFileUpload(e.dataTransfer.files);
        });

        fileInput?.addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files);
        });

        // Location detection
        document.getElementById('detect-location')?.addEventListener('click', () => {
            this.detectLocation();
        });

        // Form submission
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitReport();
        });
    }

    // Setup search and filters
    setupSearchAndFilters() {
        // Landmark search
        const landmarkSearch = document.getElementById('landmark-search');
        const landmarkCategory = document.getElementById('landmark-category');
        
        landmarkSearch?.addEventListener('input', () => this.filterLandmarks());
        landmarkCategory?.addEventListener('change', () => this.filterLandmarks());

        // Track search
        const trackSearch = document.getElementById('track-search');
        const trackStatus = document.getElementById('track-status');
        const trackCategory = document.getElementById('track-category');
        
        trackSearch?.addEventListener('input', () => this.filterTrackIssues());
        trackStatus?.addEventListener('change', () => this.filterTrackIssues());
        trackCategory?.addEventListener('change', () => this.filterTrackIssues());

        // Dashboard search
        const dashboardSearch = document.getElementById('dashboard-search');
        const dashboardDepartment = document.getElementById('dashboard-department');
        const dashboardPriority = document.getElementById('dashboard-priority');
        
        dashboardSearch?.addEventListener('input', () => this.filterDashboardComplaints());
        dashboardDepartment?.addEventListener('change', () => this.filterDashboardComplaints());
        dashboardPriority?.addEventListener('change', () => this.filterDashboardComplaints());
    }

    // Setup landmark interactions
    setupLandmarkInteractions() {
        // Map markers will be set up when landmarks are loaded
    }

    // Setup modals
    setupModals() {
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.querySelector('.modal-close');
        const modalOk = document.getElementById('modal-ok');

        modalClose?.addEventListener('click', () => this.closeModal());
        modalOk?.addEventListener('click', () => this.closeModal());
        modalOverlay?.addEventListener('click', (e) => {
            if (e.target === modalOverlay) this.closeModal();
        });
    }

    // Setup map controls
    setupMapControls() {
        document.getElementById('zoom-in')?.addEventListener('click', () => {
            this.showToast('Zoomed in', 'success');
        });

        document.getElementById('zoom-out')?.addEventListener('click', () => {
            this.showToast('Zoomed out', 'success');
        });

        document.getElementById('center-map')?.addEventListener('click', () => {
            this.showToast('Map centered', 'success');
        });
    }

    // Page management
    loadPage(pageName) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-page="${pageName}"]`)?.classList.add('active');

        // Update pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`page-${pageName}`)?.classList.add('active');

        this.currentPage = pageName;

        // Load page-specific content
        switch (pageName) {
            case 'landmarks':
                this.loadLandmarks();
                break;
            case 'track':
                this.loadTrackIssues();
                break;
            case 'dashboard':
                this.loadDashboard();
                break;
        }

        // Update URL
        window.history.pushState({ page: pageName }, '', `#${pageName}`);
    }

    // Role management
    switchRole(role) {
        this.currentRole = role;
        
        // Update role buttons
        document.querySelectorAll('.role-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-role="${role}"]`)?.classList.add('active');

        // Update page content based on role
        this.updateContentForRole();
        
        this.showToast(`Switched to ${role} view`, 'success');
    }

    // Update content based on current role
    updateContentForRole() {
        const dashboardNav = document.querySelector('[data-page="dashboard"]');
        if (this.currentRole === 'citizen') {
            dashboardNav?.style.setProperty('display', 'none');
        } else {
            dashboardNav?.style.removeProperty('display');
        }

        // Reload current page content if needed
        if (this.currentPage === 'track') {
            this.loadTrackIssues();
        } else if (this.currentPage === 'dashboard' && this.currentRole === 'authority') {
            this.loadDashboard();
        }
    }

    // Load recent issues on home page
    loadRecentIssues() {
        const container = document.getElementById('recent-issues');
        if (!container) return;

        container.innerHTML = this.mockData.recentResolved.map(issue => `
            <div class="issue-card fade-in">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">
                        Resolved
                    </span>
                    <span style="font-size: 0.875rem; color: #6b7280;">${issue.resolvedTime}</span>
                </div>
                <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">${issue.title}</h3>
                <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">${issue.description}</p>
                <div style="display: flex; align-items: center; font-size: 0.875rem; color: #6b7280;">
                    <i class="fas fa-map-pin" style="margin-right: 0.5rem;"></i>
                    ${issue.address}
                </div>
            </div>
        `).join('');
    }

    // Load landmarks
    loadLandmarks() {
        this.renderLandmarkMarkers(this.mockData.landmarks);
    }

    // Render landmark markers on map
    renderLandmarkMarkers(landmarks) {
        const markersContainer = document.getElementById('landmark-markers');
        if (!markersContainer) return;

        markersContainer.innerHTML = landmarks.map((landmark, index) => {
            const positions = [
                { top: '25%', left: '33%' },
                { top: '50%', right: '33%' },
                { bottom: '33%', left: '50%' },
                { top: '33%', right: '25%' }
            ];
            const position = positions[index % positions.length];
            const positionStyle = Object.entries(position).map(([key, value]) => `${key}: ${value}`).join('; ');

            return `
                <div class="landmark-marker" 
                     style="position: absolute; ${positionStyle}; cursor: pointer;"
                     data-landmark-id="${landmark.id}">
                    <div style="width: 32px; height: 32px; background: ${this.getCategoryColor(landmark.category)}; 
                                border-radius: 50%; display: flex; align-items: center; justify-content: center; 
                                color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
                                transition: transform 0.3s ease;">
                        ${this.getCategoryIcon(landmark.category)}
                    </div>
                </div>
            `;
        }).join('');

        // Add click listeners to markers
        markersContainer.querySelectorAll('.landmark-marker').forEach(marker => {
            marker.addEventListener('click', () => {
                const landmarkId = marker.dataset.landmarkId;
                const landmark = landmarks.find(l => l.id === landmarkId);
                this.showLandmarkDetails(landmark);
            });
        });
    }

    // Get category color
    getCategoryColor(category) {
        const colors = {
            government: '#3b82f6',
            parks: '#10b981',
            museums: '#8b5cf6',
            historic: '#f59e0b'
        };
        return colors[category] || '#6b7280';
    }

    // Get category icon
    getCategoryIcon(category) {
        const icons = {
            government: '🏛️',
            parks: '🌳',
            museums: '🎨',
            historic: '📚'
        };
        return icons[category] || '📍';
    }

    // Show landmark details in sidebar
    showLandmarkDetails(landmark) {
        const sidebar = document.getElementById('landmarks-sidebar');
        if (!sidebar) return;

        sidebar.innerHTML = `
            <div class="sidebar-content fade-in">
                <h3>Landmark Details</h3>
                <img src="${landmark.imageUrl}" alt="${landmark.name}" 
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.75rem; margin-bottom: 1rem;">
                
                <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #1f2937;">
                    ${landmark.name}
                </h4>
                
                <p style="color: #6b7280; margin-bottom: 1rem; line-height: 1.6;">
                    ${landmark.description}
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; color: #6b7280; font-size: 0.875rem;">
                        <i class="fas fa-map-pin" style="margin-right: 0.5rem; width: 16px;"></i>
                        ${landmark.address}
                    </div>
                    ${landmark.hours ? `
                        <div style="display: flex; align-items: center; color: #6b7280; font-size: 0.875rem;">
                            <i class="fas fa-clock" style="margin-right: 0.5rem; width: 16px;"></i>
                            ${landmark.hours}
                        </div>
                    ` : ''}
                    ${landmark.phone ? `
                        <div style="display: flex; align-items: center; color: #6b7280; font-size: 0.875rem;">
                            <i class="fas fa-phone" style="margin-right: 0.5rem; width: 16px;"></i>
                            ${landmark.phone}
                        </div>
                    ` : ''}
                    ${landmark.wikipediaUrl ? `
                        <div style="display: flex; align-items: center; color: #6b7280; font-size: 0.875rem;">
                            <i class="fas fa-external-link-alt" style="margin-right: 0.5rem; width: 16px;"></i>
                            <a href="${landmark.wikipediaUrl}" target="_blank" 
                               style="color: #3b82f6; text-decoration: none;">
                                Learn more on Wikipedia
                            </a>
                        </div>
                    ` : ''}
                </div>
                
                <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 0.75rem; color: #9ca3af;">Source: Wikipedia</p>
                </div>

                <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary" style="flex: 1; font-size: 0.875rem; padding: 0.5rem 1rem;">
                        <i class="fas fa-directions" style="margin-right: 0.5rem;"></i>
                        Get Directions
                    </button>
                    <button class="btn btn-outline" style="padding: 0.5rem;">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Filter landmarks
    filterLandmarks() {
        const search = document.getElementById('landmark-search')?.value.toLowerCase() || '';
        const category = document.getElementById('landmark-category')?.value || 'all';

        const filtered = this.mockData.landmarks.filter(landmark => {
            const matchesSearch = landmark.name.toLowerCase().includes(search) ||
                                landmark.description.toLowerCase().includes(search);
            const matchesCategory = category === 'all' || landmark.category === category;
            return matchesSearch && matchesCategory;
        });

        this.renderLandmarkMarkers(filtered);
    }

    // Load track issues
    loadTrackIssues() {
        this.renderMyIssues();
        this.renderIssueMarkers();
        this.updateIssueStats();
    }

    // Render my issues
    renderMyIssues() {
        const container = document.getElementById('my-issues-list');
        if (!container) return;

        const myIssues = this.mockData.complaints.filter(complaint => 
            complaint.citizenName === 'John Smith' || complaint.citizenName === 'Alex Johnson'
        );

        if (myIssues.length === 0) {
            container.innerHTML = `
                <div style="background: white; border-radius: 1rem; padding: 2rem; text-align: center;">
                    <p style="color: #6b7280;">No issues found matching your criteria.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = myIssues.map(complaint => this.renderIssueCard(complaint, 'citizen')).join('');
    }

    // Render issue card
    renderIssueCard(complaint, variant = 'citizen') {
        const priorityColors = {
            high: { bg: '#fee2e2', text: '#991b1b' },
            medium: { bg: '#fef3c7', text: '#92400e' },
            low: { bg: '#dcfce7', text: '#166534' }
        };

        const statusColors = {
            resolved: { bg: '#dcfce7', text: '#166534' },
            in_progress: { bg: '#fef3c7', text: '#92400e' },
            pending: { bg: '#f3f4f6', text: '#374151' }
        };

        const priority = priorityColors[complaint.priority];
        const status = statusColors[complaint.status];

        return `
            <div class="issue-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                            <h3 style="font-weight: 600; color: #1f2937; margin: 0;">${complaint.title}</h3>
                            <span style="background: ${priority.bg}; color: ${priority.text}; 
                                        padding: 0.125rem 0.5rem; border-radius: 9999px; 
                                        font-size: 0.75rem; font-weight: 500; text-transform: uppercase;">
                                ${complaint.priority}
                            </span>
                            <span style="background: ${status.bg}; color: ${status.text}; 
                                        padding: 0.125rem 0.5rem; border-radius: 9999px; 
                                        font-size: 0.75rem; font-weight: 500; text-transform: uppercase;">
                                ${complaint.status.replace('_', ' ')}
                            </span>
                        </div>
                        <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem;">${complaint.description}</p>
                        <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.75rem; color: #9ca3af;">
                            <span style="display: flex; align-items: center;">
                                <i class="fas fa-map-pin" style="margin-right: 0.25rem;"></i>
                                ${complaint.address}
                            </span>
                            <span style="display: flex; align-items: center;">
                                <i class="fas fa-clock" style="margin-right: 0.25rem;"></i>
                                ${this.formatTimeAgo(complaint.createdAt)}
                            </span>
                            ${variant === 'authority' ? `
                                <span style="display: flex; align-items: center;">
                                    <i class="fas fa-user" style="margin-right: 0.25rem;"></i>
                                    ${complaint.citizenName}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                </div>

                ${variant === 'citizen' ? this.renderProgressTimeline(complaint) : ''}

                <div style="display: flex; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    ${this.renderIssueActions(complaint, variant)}
                </div>
            </div>
        `;
    }

    // Render progress timeline for citizen view
    renderProgressTimeline(complaint) {
        return `
            <div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin-right: 0.75rem;"></div>
                    <span style="font-size: 0.875rem; color: #6b7280;">Report submitted</span>
                    <span style="font-size: 0.75rem; color: #9ca3af; margin-left: auto;">${this.formatTimeAgo(complaint.createdAt)}</span>
                </div>
                
                ${complaint.assignedTo ? `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 12px; height: 12px; background: #f59e0b; border-radius: 50%; margin-right: 0.75rem;"></div>
                        <span style="font-size: 0.875rem; color: #6b7280;">Assigned to ${complaint.assignedTo}</span>
                        <span style="font-size: 0.75rem; color: #9ca3af; margin-left: auto;">${this.formatTimeAgo(complaint.updatedAt)}</span>
                    </div>
                ` : ''}
                
                ${complaint.status === 'resolved' && complaint.resolvedAt ? `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin-right: 0.75rem;"></div>
                        <span style="font-size: 0.875rem; color: #6b7280;">Issue resolved</span>
                        <span style="font-size: 0.75rem; color: #9ca3af; margin-left: auto;">${this.formatTimeAgo(complaint.resolvedAt)}</span>
                    </div>
                ` : `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 12px; height: 12px; background: #d1d5db; border-radius: 50%; margin-right: 0.75rem;"></div>
                        <span style="font-size: 0.875rem; color: #9ca3af;">Resolution pending</span>
                    </div>
                `}
            </div>
        `;
    }

    // Render issue actions
    renderIssueActions(complaint, variant) {
        if (variant === 'authority') {
            let actions = [];
            
            if (complaint.status === 'pending') {
                actions.push(`
                    <button class="btn btn-primary" style="font-size: 0.875rem; padding: 0.5rem 1rem;"
                            onclick="app.assignComplaint('${complaint.id}')">
                        Assign
                    </button>
                `);
            }
            
            if (complaint.status === 'in_progress') {
                actions.push(`
                    <button class="btn btn-secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;"
                            onclick="app.updateComplaintStatus('${complaint.id}')">
                        Update Status
                    </button>
                `);
            }
            
            actions.push(`
                <button class="btn btn-outline" style="font-size: 0.875rem; padding: 0.5rem 1rem;"
                        onclick="app.viewComplaintDetails('${complaint.id}')">
                    View Details
                </button>
            `);
            
            return actions.join('');
        } else {
            return `
                <button class="btn btn-outline" style="flex: 1; font-size: 0.875rem; padding: 0.5rem 1rem;"
                        onclick="app.viewComplaintDetails('${complaint.id}')">
                    View Details
                </button>
                ${complaint.status === 'resolved' ? `
                    <button class="btn btn-secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;"
                            onclick="app.rateService('${complaint.id}')">
                        Rate Service
                    </button>
                ` : ''}
            `;
        }
    }

    // Render issue markers on map
    renderIssueMarkers() {
        const markersContainer = document.getElementById('issue-markers');
        if (!markersContainer) return;

        markersContainer.innerHTML = this.mockData.complaints.map((complaint, index) => {
            const positions = [
                { top: '20%', left: '25%' },
                { top: '45%', right: '25%' },
                { bottom: '25%', left: '45%' },
                { top: '60%', right: '40%' },
                { bottom: '40%', left: '20%' }
            ];
            const position = positions[index % positions.length];
            const positionStyle = Object.entries(position).map(([key, value]) => `${key}: ${value}`).join('; ');

            const priorityColor = this.getPriorityColor(complaint.priority);

            return `
                <div class="issue-marker" 
                     style="position: absolute; ${positionStyle}; cursor: pointer;"
                     data-complaint-id="${complaint.id}">
                    <div style="width: 16px; height: 16px; background: ${priorityColor}; 
                                border-radius: 50%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                                transition: transform 0.3s ease;">
                    </div>
                </div>
            `;
        }).join('');

        // Add click listeners to markers
        markersContainer.querySelectorAll('.issue-marker').forEach(marker => {
            marker.addEventListener('click', () => {
                const complaintId = marker.dataset.complaintId;
                const complaint = this.mockData.complaints.find(c => c.id === complaintId);
                this.showToast(`Issue: ${complaint.title}`, 'info');
            });
        });
    }

    // Get priority color
    getPriorityColor(priority) {
        const colors = {
            high: '#ef4444',
            medium: '#f59e0b',
            low: '#10b981'
        };
        return colors[priority] || '#6b7280';
    }

    // Update issue statistics
    updateIssueStats() {
        const activeIssues = this.mockData.complaints.filter(c => c.status !== 'resolved').length;
        const resolvedMonth = 156;
        const avgResolution = '2.1 days';

        document.getElementById('active-issues').textContent = activeIssues;
        document.getElementById('resolved-month').textContent = resolvedMonth;
        document.getElementById('avg-resolution').textContent = avgResolution;
    }

    // Filter track issues
    filterTrackIssues() {
        // Implementation for filtering would go here
        this.showToast('Filters applied', 'success');
    }

    // Load dashboard
    loadDashboard() {
        this.loadTeamPerformance();
        this.loadRecentActivity();
        this.loadComplaintsList();
    }

    // Load team performance
    loadTeamPerformance() {
        const container = document.getElementById('team-performance');
        if (!container) return;

        container.innerHTML = this.mockData.teams.map(team => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 32px; height: 32px; background: #3b82f6; border-radius: 50%; 
                                display: flex; align-items: center; justify-content: center; 
                                margin-right: 0.75rem; color: white;">
                        <i class="${team.icon}" style="font-size: 0.875rem;"></i>
                    </div>
                    <div>
                        <p style="font-weight: 500; color: #1f2937; margin: 0;">${team.name}</p>
                        <p style="font-size: 0.75rem; color: #6b7280; margin: 0;">${team.activeTasks} active tasks</p>
                    </div>
                </div>
                <span style="font-weight: 600; color: #10b981;">${team.performance}%</span>
            </div>
        `).join('');
    }

    // Load recent activity
    loadRecentActivity() {
        const container = document.getElementById('recent-activity');
        if (!container) return;

        const getActivityColor = (type) => {
            const colors = {
                resolved: '#10b981',
                assigned: '#3b82f6',
                scheduled: '#f59e0b'
            };
            return colors[type] || '#6b7280';
        };

        container.innerHTML = this.mockData.activities.map(activity => `
            <div style="display: flex; align-items: flex-start; padding: 0.5rem 0;">
                <div style="width: 8px; height: 8px; background: ${getActivityColor(activity.type)}; 
                            border-radius: 50%; margin-top: 0.5rem; margin-right: 0.75rem; flex-shrink: 0;"></div>
                <div>
                    <p style="font-size: 0.875rem; color: #1f2937; margin: 0;">${activity.description}</p>
                    <p style="font-size: 0.75rem; color: #6b7280; margin: 0;">${activity.timestamp}</p>
                </div>
            </div>
        `).join('');
    }

    // Load complaints list for dashboard
    loadComplaintsList() {
        const container = document.getElementById('complaints-list');
        if (!container) return;

        container.innerHTML = this.mockData.complaints.slice(0, 5).map(complaint => `
            <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                ${this.renderIssueCard(complaint, 'authority')}
            </div>
        `).join('');
    }

    // Filter dashboard complaints
    filterDashboardComplaints() {
        // Implementation for filtering would go here
        this.showToast('Dashboard filters applied', 'success');
    }

    // Form submission
    submitReport() {
        const form = document.getElementById('report-form');
        const formData = new FormData(form);
        
        // Validate required fields
        const category = document.querySelector('.category-option.selected')?.dataset.category;
        const address = document.getElementById('issue-address').value;
        const description = document.getElementById('issue-description').value;
        const name = document.getElementById('citizen-name').value;
        const email = document.getElementById('citizen-email').value;

        if (!category || !address || !description || !name || !email) {
            this.showToast('Please fill in all required fields', 'error');
            return;
        }

        // Show loading
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        // Simulate submission
        setTimeout(() => {
            // Generate report ID
            const reportId = `CR2024-${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`;
            
            // Add to mock data
            const newComplaint = {
                id: reportId,
                title: description.split(' ').slice(0, 5).join(' '),
                description,
                category,
                priority: document.querySelector('input[name="priority"]:checked').value,
                status: 'pending',
                address,
                citizenName: name,
                citizenEmail: email,
                citizenPhone: document.getElementById('citizen-phone').value,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            this.mockData.complaints.unshift(newComplaint);

            // Show success modal
            document.getElementById('report-id').textContent = reportId;
            this.showModal('success-modal');

            // Reset form
            form.reset();
            document.querySelectorAll('.category-option').forEach(opt => opt.classList.remove('selected'));

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            this.showToast('Report submitted successfully!', 'success');
        }, 2000);
    }

    // File upload handling
    handleFileUpload(files) {
        if (files.length > 0) {
            this.showToast(`${files.length} file(s) selected`, 'success');
        }
    }

    // Location detection
    detectLocation() {
        const addressInput = document.getElementById('issue-address');
        
        // Simulate GPS detection
        setTimeout(() => {
            addressInput.value = '123 Main Street, Downtown';
            this.showToast('Location detected successfully', 'success');
        }, 1000);
    }

    // Complaint actions
    assignComplaint(complaintId) {
        this.showToast(`Complaint ${complaintId} assigned to team`, 'success');
    }

    updateComplaintStatus(complaintId) {
        this.showToast(`Status updated for complaint ${complaintId}`, 'success');
    }

    viewComplaintDetails(complaintId) {
        this.showToast(`Viewing details for complaint ${complaintId}`, 'info');
    }

    rateService(complaintId) {
        this.showToast('Thank you for your feedback!', 'success');
    }

    // Utility functions
    formatTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Less than 1 hour ago';
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) return `${diffInDays} days ago`;
        const diffInWeeks = Math.floor(diffInDays / 7);
        return `${diffInWeeks} weeks ago`;
    }

    // Modal management
    showModal(modalId) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById(modalId);
        overlay.classList.add('active');
        modal.style.display = 'block';
    }

    closeModal() {
        const overlay = document.getElementById('modal-overlay');
        overlay.classList.remove('active');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Toast notifications
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;

        container.appendChild(toast);

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Loading screen
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 1500);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CivicConnectApp();
});

// Handle browser back/forward
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        window.app.loadPage(event.state.page);
    }
});

// Handle initial URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'landmarks', 'report', 'track', 'dashboard'].includes(hash)) {
        window.app.loadPage(hash);
    }
});
